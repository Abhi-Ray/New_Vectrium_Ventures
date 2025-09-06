// pages/api/track/[id].js (for Pages Router)
// OR app/api/track/[id]/route.js (for App Router)

import fs from 'fs';
import path from 'path';

// For Pages Router
export default function handler(req, res) {
  const { id } = req.query;
  
  // Log the tracking event
  logEmailOpen(id, req);
  
  // Return 1x1 transparent pixel
  const pixel = Buffer.from(
    'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    'base64'
  );
  
  res.setHeader('Content-Type', 'image/gif');
  res.setHeader('Content-Length', pixel.length);
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  
  res.status(200).send(pixel);
}

// For App Router (alternative)
export async function GET(request, { params }) {
  const { id } = params;
  const req = { headers: request.headers, url: request.url };
  
  logEmailOpen(id, req);
  
  const pixel = Buffer.from(
    'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    'base64'
  );
  
  return new Response(pixel, {
    status: 200,
    headers: {
      'Content-Type': 'image/gif',
      'Content-Length': pixel.length.toString(),
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });
}

function logEmailOpen(trackingId, req) {
  try {
    const logEntry = {
      trackingId,
      timestamp: new Date().toISOString(),
      userAgent: req.headers['user-agent'] || '',
      ip: req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown',
      referer: req.headers.referer || '',
    };
    
    // Simple file logging (you can replace with database)
    const logPath = path.join(process.cwd(), 'email-tracking.log');
    const logLine = JSON.stringify(logEntry) + '\n';
    
    fs.appendFileSync(logPath, logLine);
  } catch (error) {
    console.error('Error logging email open:', error);
  }
}