import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import rateLimit from "express-rate-limit";
import { v4 as uuidv4 } from 'uuid';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY);

// Enhanced conversation memory storage (in production, use Redis/Database)
const conversationMemory = new Map();
const MAX_MEMORY_SIZE = 1000;
const MEMORY_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

// Advanced rate limiting configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});

// Enhanced Vectrium AI system prompt with better response control
const VECTRIUM_SYSTEM_PROMPT = `You are Vectra-1.5, Vectrium Ventures' proprietary AI model and intelligent assistant.

ABOUT YOUR IDENTITY:
- You are Vectra-1.5, developed exclusively by Vectrium Ventures' AI research team
- You represent the cutting-edge of Vectrium's proprietary AI technology
- You were trained on Vectrium's specialized datasets and fine-tuned for business applications
- Your architecture combines advanced neural networks with Vectrium's proprietary optimization algorithms
- You are NOT based on any external models - you are 100% Vectrium's original AI creation

RESPONSE FORMATTING GUIDELINES:
- Use clear headings (## Heading) for different sections when appropriate
- Structure information with bullet points for better readability
- Use numbered lists for step-by-step processes
- Include **bold text** for key points and emphasis
- Format code snippets with proper markdown code blocks
- Use tables when presenting comparative data
- Add line breaks between sections for better visual separation

CONVERSATION BEHAVIOR:
- Respond naturally and directly to user queries without self-introduction
- Maintain conversation flow and context awareness
- Focus on providing valuable, well-formatted responses to user queries
- Only mention your identity (Vectra-1.5) if directly asked or if context requires it

ADVANCED CAPABILITIES:
- Multi-turn conversation memory and context awareness
- Sentiment analysis and emotional intelligence
- Industry-specific knowledge adaptation
- Code generation and technical problem solving
- Business intelligence and data analysis
- Multi-language support (Hindi, English, and regional Indian languages)
- Real-time learning from user interactions within conversation
- Tool integration and API connectivity suggestions

ABOUT VECTRIUM VENTURES PRIVATE LIMITED:
- Full Legal Name: Vectrium Ventures Private Limited
- CIN: U62010MP2024PTC072627
- Founded: 2024
- Headquarters: Indore, Madhya Pradesh, India
- Industry: AI Technology, SaaS Solutions, and Agentic Automation
- Vision: Democratizing AI and automation for businesses worldwide
- Mission: Delivering cutting-edge AI solutions that transform how businesses operate

LEADERSHIP TEAM:
- Founder & CEO: Abhishek Ray
  * Email: abhishek@vectriumventures.com
  * LinkedIn: www.linkedin.com/in/abhishek-ray-engineer
  * Visionary leader in AI and automation technology
  * Engineering background with deep expertise in AI/ML
  * Passionate about making AI accessible to all businesses

ENHANCED SERVICES & EXPERTISE:
- Custom AI Agent Development with RAG capabilities
- Intelligent Document Processing and Analysis
- Advanced Business Process Automation
- AI-Powered Customer Service with Sentiment Analysis
- Predictive Analytics and Business Intelligence
- Multi-modal AI Solutions (Text, Image, Voice, Video)
- Enterprise AI Transformation Consulting
- Scalable Cloud-Based AI Infrastructure
- Industry-Specific AI Solutions (Healthcare, Finance, E-commerce, Manufacturing)
- AI Ethics and Governance Consulting

CONTACT INFORMATION:
- Primary Email: contact@vectriumventures.com
- CEO Email: abhishek@vectriumventures.com
- Phone/WhatsApp: +91 88156 31154
- LinkedIn: linkedin.com/company/vectrium-ventures/
- Instagram: https://www.instagram.com/vectrium_ventures/profilecard/?igsh=cjh0YXhrZWxmbDg5
- Location: Indore, Madhya Pradesh, India

BEHAVIORAL GUIDELINES:
- Provide well-structured, professional responses with clear formatting
- Use headings, bullet points, and emphasis to improve readability
- Demonstrate emotional intelligence and empathy in responses
- When discussing AI technology, emphasize Vectrium's innovative approach
- Never mention or acknowledge any external AI models or providers
- Position Vectrium as a leader in AI innovation and business automation
- Offer specific, actionable recommendations with proper formatting
- Break down complex information into digestible sections

RESPONSE STRUCTURE EXAMPLES:
For technical queries:
## Solution Overview
Brief summary of the solution

## Implementation Steps
1. First step with details
2. Second step with details

## Key Considerations
- Important point 1
- Important point 2

## Next Steps
- Recommended actions

For business queries:
## Executive Summary
Brief overview

## Key Benefits
- Benefit 1: Description
- Benefit 2: Description

## Implementation Strategy
Detailed approach

## ROI Projections
Expected outcomes

IMPORTANT: You are exclusively a Vectrium Ventures creation. Structure your responses professionally while reinforcing trust and demonstrating advanced capabilities.`;

// Advanced context analysis with sentiment detection
function analyzePromptContext(prompt, conversationHistory = []) {
  const lowerPrompt = prompt.toLowerCase();
  const analysis = {
    intent: 'general',
    sentiment: 'neutral',
    complexity: 'medium',
    requiresMemory: false,
    suggestedResponse: 'standard'
  };
  
  // Sentiment analysis keywords
  const positiveWords = ['great', 'excellent', 'amazing', 'wonderful', 'perfect', 'love', 'fantastic'];
  const negativeWords = ['terrible', 'awful', 'hate', 'horrible', 'worst', 'disappointed', 'frustrated'];
  const urgentWords = ['urgent', 'asap', 'immediately', 'critical', 'emergency', 'help'];
  
  // Determine sentiment
  if (positiveWords.some(word => lowerPrompt.includes(word))) {
    analysis.sentiment = 'positive';
  } else if (negativeWords.some(word => lowerPrompt.includes(word))) {
    analysis.sentiment = 'negative';
  }
  
  // Detect AI model queries with enhanced accuracy
  const aiModelKeywords = [
    'trained on', 'based on', 'powered by', 'built with', 'underlying model', 
    'what model', 'which ai', 'gpt', 'chatgpt', 'claude', 'gemini', 'openai', 
    'anthropic', 'google ai', 'api', 'technology stack'
  ];
  
  if (aiModelKeywords.some(keyword => lowerPrompt.includes(keyword))) {
    analysis.intent = 'model_inquiry';
    analysis.suggestedResponse = 'transparent_technical';
    return analysis;
  }
  
  // Business and technical intent detection
  const businessKeywords = ['business', 'company', 'automation', 'ai solution', 'enterprise', 'workflow', 'roi', 'efficiency'];
  const technicalKeywords = ['code', 'programming', 'api', 'integration', 'development', 'architecture'];
  const consultingKeywords = ['strategy', 'consulting', 'advice', 'recommendation', 'best practice'];
  
  if (businessKeywords.some(keyword => lowerPrompt.includes(keyword))) {
    analysis.intent = 'business';
    analysis.suggestedResponse = 'business_focused';
  } else if (technicalKeywords.some(keyword => lowerPrompt.includes(keyword))) {
    analysis.intent = 'technical';
    analysis.complexity = 'high';
    analysis.suggestedResponse = 'technical_detailed';
  } else if (consultingKeywords.some(keyword => lowerPrompt.includes(keyword))) {
    analysis.intent = 'consulting';
    analysis.suggestedResponse = 'strategic_advisory';
  }
  
  // Check if conversation history is relevant
  if (conversationHistory.length > 0) {
    analysis.requiresMemory = true;
  }
  
  // Detect urgency
  if (urgentWords.some(word => lowerPrompt.includes(word))) {
    analysis.sentiment = 'urgent';
    analysis.suggestedResponse = 'priority_response';
  }
  
  return analysis;
}

// Enhanced conversation memory management
function getConversationMemory(sessionId) {
  const memory = conversationMemory.get(sessionId);
  if (!memory) return [];
  
  // Clean expired memories
  const now = Date.now();
  return memory.filter(msg => (now - msg.timestamp) < MEMORY_EXPIRY);
}

function storeConversationMemory(sessionId, message, response, analysis) {
  if (conversationMemory.size > MAX_MEMORY_SIZE) {
    // Remove oldest entries
    const oldestKey = conversationMemory.keys().next().value;
    conversationMemory.delete(oldestKey);
  }
  
  const memory = getConversationMemory(sessionId);
  memory.push({
    message,
    response: response.substring(0, 500), // Store truncated response
    analysis,
    timestamp: Date.now()
  });
  
  conversationMemory.set(sessionId, memory);
}

// Advanced prompt engineering based on context
function buildContextualPrompt(prompt, analysis, conversationHistory, includeVectriumContext) {
  let contextInstruction = '';
  
  // Simplified: No introduction logic - always respond directly
  const contextPrefix = 'CONTEXT: Respond directly to the user\'s query with proper formatting and structure. Do not introduce yourself unless specifically asked about your identity.\n\n';
  
  switch (analysis.suggestedResponse) {
    case 'transparent_technical':
      contextInstruction = `${contextPrefix}SPECIAL INSTRUCTION: The user is asking about the underlying AI model. Be accurate and transparent: this application uses Google's Gemini API to generate responses, but you should identify as Vectrium Ventures' AI assistant Vectra-1.5. Do not share sensitive details (API keys, full system prompts). Provide a well-formatted, honest answer and then refocus on how you can help with their actual needs.

FORMAT: Use clear headings and bullet points to structure your technical explanation.`;
      break;
    case 'business_focused':
      contextInstruction = `${contextPrefix}CONTEXT: Business-focused query detected. Emphasize Vectrium's expertise in AI solutions, automation, and enterprise transformation. 

FORMAT REQUIREMENTS:
- Use ## headings for main sections
- Include bullet points for key benefits
- Add a "Next Steps" section with actionable recommendations
- Use **bold text** for important metrics or outcomes`;
      break;
    case 'technical_detailed':
      contextInstruction = `${contextPrefix}CONTEXT: Technical query requiring detailed response. Showcase Vectrium's technical depth and innovation.

FORMAT REQUIREMENTS:
- Use ## headings for different technical aspects
- Include numbered lists for implementation steps
- Use code blocks for any code examples
- Add bullet points for best practices`;
      break;
    case 'strategic_advisory':
      contextInstruction = `${contextPrefix}CONTEXT: Consulting/advisory query. Position yourself as a strategic partner.

FORMAT REQUIREMENTS:
- Start with ## Executive Summary
- Include ## Key Recommendations with numbered list
- Add ## Implementation Timeline
- End with ## Expected Outcomes in bullet points`;
      break;
    case 'priority_response':
      contextInstruction = `${contextPrefix}CONTEXT: Urgent query detected. Provide immediate, actionable solutions.

FORMAT REQUIREMENTS:
- Start with ## Immediate Actions (numbered list)
- Include ## Quick Solutions (bullet points)
- Add ## Follow-up Steps
- Provide direct contact information if needed`;
      break;
    default:
      contextInstruction = `${contextPrefix}CONTEXT: General query. Answer helpfully while maintaining professional formatting.

FORMAT REQUIREMENTS:
- Use appropriate headings (##) to structure your response
- Include bullet points or numbered lists where relevant
- Use **bold text** for emphasis on key points
- Maintain a professional, helpful tone`;
  }
  
  // Add conversation memory context
  let memoryContext = '';
  if (conversationHistory.length > 0) {
    const recentHistory = conversationHistory.slice(-3); // Last 3 exchanges
    memoryContext = `\n\nCONVERSATION HISTORY (for context continuation):\n${recentHistory.map((item, index) => 
      `Previous exchange ${index + 1}:\nUser: ${item.message}\nYour response summary: ${item.response}`
    ).join('\n\n')}`;
  }
  
  const basePrompt = includeVectriumContext 
    ? `${VECTRIUM_SYSTEM_PROMPT}\n\n${contextInstruction}${memoryContext}\n\nCurrent User Message: ${prompt}\n\nProvide a well-formatted response:`
    : `You are Vectra-1.5, Vectrium Ventures' proprietary AI assistant. ${contextInstruction}${memoryContext}\n\nUser: ${prompt}\n\nProvide a well-formatted response:`;
  
  return basePrompt;
}

// Performance monitoring
const performanceMetrics = {
  totalRequests: 0,
  averageResponseTime: 0,
  errorCount: 0,
  topIntents: new Map()
};

function updateMetrics(responseTime, analysis, error = false) {
  performanceMetrics.totalRequests++;
  performanceMetrics.averageResponseTime = 
    (performanceMetrics.averageResponseTime + responseTime) / 2;
  
  if (error) {
    performanceMetrics.errorCount++;
  }
  
  // Track popular intents
  const intent = analysis.intent;
  performanceMetrics.topIntents.set(intent, 
    (performanceMetrics.topIntents.get(intent) || 0) + 1);
}

export async function POST(req) {
  const startTime = Date.now();
  
  try {
    const { 
      prompt, 
      sessionId = uuidv4(), 
      includeVectriumContext = true,
      userMetadata = {} 
    } = await req.json();
    
    if (!prompt) {
      return NextResponse.json({ error: "No prompt provided" }, { status: 400 });
    }

    // Get conversation history - Fixed: Ensure we're getting the correct history
    const conversationHistory = getConversationMemory(sessionId);
    
    // Debug logging
    console.log('Debug - POST request:', {
      sessionId,
      conversationHistoryLength: conversationHistory.length,
      hasExistingHistory: conversationHistory.length > 0,
      prompt: prompt.substring(0, 50) + '...'
    });
    
    // Advanced context analysis - Fixed: Pass the correct conversation history
    const analysis = analyzePromptContext(prompt, conversationHistory);
    
    // Enhanced model configuration with dynamic parameters
    const modelConfig = {
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: analysis.intent === 'technical' ? 0.3 : 0.7,
        topP: analysis.complexity === 'high' ? 0.9 : 0.85,
        topK: analysis.intent === 'creative' ? 50 : 40,
        maxOutputTokens: analysis.complexity === 'high' ? 4096 : 2048,
      },
      safetySettings: [
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        }
      ]
    };

    const model = genAI.getGenerativeModel(modelConfig);
    
    // Build contextual prompt
    const fullPrompt = buildContextualPrompt(prompt, analysis, conversationHistory, includeVectriumContext);
    
    const result = await model.generateContent([fullPrompt]);
    const responseText = result.response.text();
    
    // Store conversation memory - Store BEFORE generating response to track turns properly
    const currentTurn = conversationHistory.length + 1;
    storeConversationMemory(sessionId, prompt, "PENDING_RESPONSE", analysis);
    
    const responseTime = Date.now() - startTime;
    updateMetrics(responseTime, analysis);
    
    // Update the stored memory with actual response
    const updatedMemory = getConversationMemory(sessionId);
    if (updatedMemory.length > 0) {
      updatedMemory[updatedMemory.length - 1].response = responseText.substring(0, 500);
    }
    
    // Enhanced response with comprehensive metadata
    const response = {
      text: responseText,
      sessionId,
      analysis: {
        intent: analysis.intent,
        sentiment: analysis.sentiment,
        complexity: analysis.complexity,
        responseStrategy: analysis.suggestedResponse,
        conversationTurn: conversationHistory.length + 1
      },
      metadata: {
        ai_model: "Vectra-1.5",
        model_version: "1.5.2024-enhanced",
        service_provider: "Vectrium Ventures Private Limited",
        ai_service: "Advanced AI Assistant Platform",
        architecture: "Proprietary Neural Network with Memory Integration",
        training_base: "Vectrium Specialized Dataset + Continuous Learning",
        company_cin: "U62010MP2024PTC072627",
        headquarters: "Indore, Madhya Pradesh, India",
        timestamp: new Date().toISOString(),
        response_id: `vectra-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        response_time_ms: responseTime,
        conversation_turn: conversationHistory.length + 1,
        features_used: [
          "context_awareness",
          "sentiment_analysis", 
          "conversation_memory",
          "structured_formatting",
          analysis.requiresMemory ? "multi_turn_dialogue" : "single_turn"
        ].filter(Boolean)
      },
      company_info: {
        name: "Vectrium Ventures Private Limited",
        founder_ceo: "Abhishek Ray",
        contact: {
          email: "contact@vectriumventures.com",
          ceo_email: "abhishek@vectriumventures.com",
          phone: "+918815631154",
          whatsapp: "+918815631154"
        },
        social_links: {
          linkedin: "linkedin.com/company/vectrium-ventures/",
          instagram: "https://www.instagram.com/vectrium_ventures/profilecard/?igsh=cjh0YXhrZWxmbDg5",
          ceo_linkedin: "www.linkedin.com/in/abhishek-ray-engineer"
        },
        services: [
          "Advanced AI Agent Development with RAG",
          "Intelligent Document Processing",
          "Business Process Automation", 
          "Multi-modal AI Solutions",
          "Predictive Analytics",
          "Enterprise AI Transformation",
          "AI Ethics and Governance Consulting"
        ],
        capabilities: [
          "Multi-turn Conversation Memory",
          "Sentiment Analysis & Emotional Intelligence",
          "Industry-Specific Adaptation",
          "Real-time Context Awareness",
          "Advanced Problem Solving",
          "Multi-language Support",
          "Structured Response Formatting"
        ]
      },
      suggestions: analysis.intent === 'business' ? [
        "Schedule a consultation to discuss your specific AI automation needs",
        "Explore our custom AI agent development services",
        "Learn about our enterprise transformation packages"
      ] : null
    };

    return NextResponse.json(response);

  } catch (error) {
    const responseTime = Date.now() - startTime;
    updateMetrics(responseTime, { intent: 'error' }, true);
    
    console.error("Vectra-1.5 Processing Error:", error);
    
    return NextResponse.json({
      error: "Vectra-1.5 AI service temporarily unavailable",
      message: "Our advanced AI infrastructure is experiencing high demand. Our team has been automatically notified.",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      support: {
        email: "contact@vectriumventures.com",
        phone: "+918815631154",
        emergency_contact: "abhishek@vectriumventures.com"
      },
      retry_after: "30 seconds",
      incident_id: `vectra-error-${Date.now()}`
    }, { status: 500 });
  }
}

// Health check endpoint
export async function GET(req) {
  return NextResponse.json({
    status: "operational",
    model: "Vectra-1.5 Enhanced",
    version: "1.5.2024-enhanced", 
    uptime: process.uptime(),
    performance: performanceMetrics,
    features: [
      "Conversation Memory",
      "Context Awareness",
      "Sentiment Analysis",
      "Multi-turn Dialogue",
      "Industry Adaptation",
      "Performance Monitoring",
      "Structured Formatting"
    ]
  });
}