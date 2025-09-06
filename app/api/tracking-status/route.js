// pages/api/tracking-status.js (or app/api/tracking-status/route.js)

import fs from 'fs';
import path from 'path';

// For Pages Router
export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  try {
    const trackingData = getTrackingData();
    res.status(200).json(trackingData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read tracking data' });
  }
}

// For App Router
export async function GET() {
  try {
    const trackingData = getTrackingData();
    return Response.json(trackingData);
  } catch (error) {
    return Response.json({ error: 'Failed to read tracking data' }, { status: 500 });
  }
}

function getTrackingData() {
  const logPath = path.join(process.cwd(), 'email-tracking.log');
  
  if (!fs.existsSync(logPath)) {
    return { opens: [], summary: { totalOpens: 0, uniqueOpens: 0 } };
  }
  
  const logContent = fs.readFileSync(logPath, 'utf-8');
  const lines = logContent.trim().split('\n').filter(line => line);
  
  const opens = lines.map(line => {
    try {
      return JSON.parse(line);
    } catch {
      return null;
    }
  }).filter(Boolean);
  
  // Group by tracking ID
  const grouped = {};
  opens.forEach(open => {
    if (!grouped[open.trackingId]) {
      grouped[open.trackingId] = {
        trackingId: open.trackingId,
        firstOpenDate: open.timestamp,
        lastOpenDate: open.timestamp,
        openCount: 0,
        opens: []
      };
    }
    grouped[open.trackingId].openCount++;
    grouped[open.trackingId].opens.push(open);
    grouped[open.trackingId].lastOpenDate = open.timestamp;
  });
  
  return {
    opens: Object.values(grouped),
    summary: {
      totalOpens: opens.length,
      uniqueOpens: Object.keys(grouped).length
    }
  };
}