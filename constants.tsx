import { Project, SkillCategory, Education, Achievement } from './types';
import { Database, Brain, Terminal, Layers, Presentation, Server, Cloud, Code } from 'lucide-react';
import React from 'react';

export const USER_INFO = {
  name: "Mallesh",
  fullName: "Telugu Mallesh",
  title: "AI Engineer & Full Stack Developer",
  tagline: "Building autonomous systems, RAG architectures, and intelligent agents.",
  about: "I am a passionate AI Engineer and Full Stack Developer based in India, specialized in designing autonomous systems and RAG architectures. With a strong academic background in Computer Applications (MCA), I bridge the gap between complex AI models and practical, scalable applications. My expertise spans LangChain, Pinecone, and Gemini API, allowing me to build systems that not only understand data but act on it intelligently.",
  location: "India",
  email: "telugumallesh79@gmail.com",
  social: {
    github: "https://github.com/AIwithMallesh",
    linkedin: "https://www.linkedin.com/in/telugu-mallesh/"
  },
  image: "https://avatars.githubusercontent.com/u/235036687?v=4"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Agent & LLM",
    skills: ["Prompt Engineering", "RAG", "LangChain", "LangGraph", "Tool-using Agents", "Gemini API", "OpenAI API"]
  },
  {
    category: "Vector & Search",
    skills: ["Pinecone", "Chroma DB", "FAISS", "Elasticsearch", "Hybrid Retrieval"]
  },
  {
    category: "Cloud & Infra",
    skills: ["AWS (EC2, ECS, Lambda, S3, IAM)", "GCP", "Cloud Architecture"]
  },
  {
    category: "Containers & DevOps",
    skills: ["Docker", "Docker Hub", "ECR", "GitHub Actions", "CI/CD", "Docker Compose"]
  },
  {
    category: "ML & Data",
    skills: ["PyTorch", "TensorFlow", "Transformers", "ETL Pipelines", "Pandas", "Metadata Design"]
  },
  {
    category: "Languages & Core",
    skills: ["Python", "TypeScript", "SQL", "Postgres", "Redis", "REST/OpenAPI", "Bash"]
  }
];

// export const ACHIEVEMENTS: Achievement[] = [
//   { title: "RAG System Accuracy", metric: "92% Relevance in Pilot" },
//   { title: "Automation Impact", metric: "45% Reduction in Manual Tasks" },
//   { title: "Vector Scalability", metric: "Sub-second queries at Million+ scale" }
// ];

export const EDUCATION: Education[] = [
  { degree: "MCA (Master of Computer Applications)", institution: "Jawaharlal Nehru Technological University, Anantapur" },
  { degree: "BSC (Computer Applications)", institution: "Rayalaseema University" },
  { degree: "Intermediate (MPC)", institution: "Government Junior College" },
  { degree: "SSC (10th Class)", institution: "ZPHS" }
];

export const PROJECTS: Project[] = [
  {
    id: "fssai-rag",
    title: "RAG-Based Compliance System (FSSAI)",
    role: "Architect & Lead Developer",
    shortDescription: "A specialized RAG system for food safety compliance retrieving regulatory content for accurate answers.",
    overview: "Designed and implemented a Retrieval-Augmented Generation (RAG) system focused on food safety and compliance knowledge (FSSAI domain). The system retrieves highly relevant regulatory and domain-specific content from a vector database and augments LLM responses for accurate, grounded answers. Tuned similarity thresholds to reduce irrelevant context injection.",
    techStack: ["Chroma DB", "Python", "Embeddings", "LLMs"],
    associatedSkills: ["RAG Architecture", "Vector DB", "Semantic Search", "Prompt Grounding"],
    links: {},
    mermaidChart: `
      graph TD
        subgraph Ingestion
          A[Raw Regulatory Docs] -->|Chunking| B[Text Chunks]
          B -->|Embedding Model| C[Vectors]
          C --> D[(Chroma DB)]
        end
        subgraph Query Flow
          U[User Query] -->|Embed| E[Query Vector]
          E -->|Semantic Search| D
          D -->|Top-k Docs| F[Context Window]
          F --> G[LLM Input]
          U --> G
          G --> H[Synthesized Compliance Answer]
        end
        style D fill:#2563eb,stroke:#fff,stroke-width:2px,color:white
        style H fill:#0891b2,stroke:#fff,stroke-width:2px,color:white
    `
  },
  {
    id: "stock-agent",
    title: "Stock Market Intelligence Agent",
    role: "Full Stack AI Engineer",
    shortDescription: "An agentic assistant combining real-time API data and search engine qualitative data for stock insights.",
    overview: "Built an agentic stock market assistant that collects real-time and contextual stock data from the internet using stock market APIs and search engines, then synthesizes insights using an LLM. It merges quantitative data with qualitative news to provide a holistic market view.",
    techStack: ["LangChain", "Python", "Streamlit", "Market APIs", "Search Tools"],
    associatedSkills: ["Agent Tooling", "API Integration", "LangChain Agents", "Generative AI"],
    links: {
      docker: "https://hub.docker.com/repository/docker/telugumallesh/stock-agent/general"
    },
    mermaidChart: `
      graph LR
        U[User Query] --> A[Orchestrator]
        A -->|Tool Call| B[Stock Market APIs]
        A -->|Tool Call| C[Search Engine]
        B -->|Live Data| D[Context Aggregator]
        C -->|News/Qualitative| D
        D --> E[LLM Analysis]
        E --> F[User Friendly Insight]
        style B fill:#e11d48,stroke:#fff,color:white
        style C fill:#e11d48,stroke:#fff,color:white
        style F fill:#0891b2,stroke:#fff,color:white
    `
  },
  {
    id: "test-case-gen",
    title: "AI Test Case Generator Agent",
    role: "Developer",
    shortDescription: "Automated conversion of Functional Requirement Specifications (FRS) into structured Excel test cases.",
    overview: "Built an AI-powered test case generation system that automatically converts uploaded Functional Requirement Specification (FRS) Markdown files into structured, high-quality software test cases. It uses deep understanding to infer edge cases and exports results for QA teams.",
    techStack: ["LangChain", "Perplexity LLM", "Python", "Pandas", "OpenPyXL"],
    associatedSkills: ["Test Automation", "Requirement Analysis", "Structured Output", "Excel Automation"],
    links: {
      docker: "https://hub.docker.com/repository/docker/telugumallesh/prd-testcase-generator/general"
    },
    mermaidChart: `
      graph TD
        A[User Uploads FRS .md] --> B[Semantic Chunking]
        B --> C[Requirement Segments]
        C --> D{Deep Reasoning Agent}
        D -->|Query| E[Perplexity/LLM]
        E -->|Edge Cases/Scenarios| D
        D --> F[Generate Structured Cases]
        F --> G[Format: ID, Steps, Expected]
        G --> H[Export to Excel .xlsx]
        style A fill:#2563eb,color:white
        style H fill:#0891b2,color:white
    `
  },
  {
    id: "deep-chat",
    title: "Self-Learning Multi-Agent System",
    role: "System Architect",
    shortDescription: "A Perplexity-style reasoning engine using LangGraph with planner, validator, and critic agents.",
    overview: "Designed an advanced self-learning, multi-agent conversational AI inspired by Perplexity-style reasoning. The system uses multiple specialized agents connected via LangGraph to deliver deep, validated, and highly accurate answers. It features a self-correcting loop where a critic agent can reject answers.",
    techStack: ["LangGraph", "LangChain", "Pinecone", "Docker", "AWS EC2"],
    associatedSkills: ["Multi-agent Orchestration", "LangGraph", "Vector DB", "Cloud Deployment"],
    links: {
      docker: "https://hub.docker.com/repository/docker/telugumallesh/ai-agent-backend"
    },
    mermaidChart: `
      graph TD
        Start[User Query] --> Planner[Planner Agent]
        Planner --> Validator{Plan Valid?}
        Validator -- No --> Planner
        Validator -- Yes --> Retrieval[Retrieval Agent]
        Retrieval --> Synthesis[LLM Synthesis Agent]
        Synthesis --> Critic{Critic Verdict > 80%?}
        Critic -- Pass --> Final[Final Output]
        Critic -- Fail --> Search[External Search Tool]
        Search --> Synthesis
        style Planner fill:#9333ea,color:white
        style Retrieval fill:#9333ea,color:white
        style Synthesis fill:#9333ea,color:white
        style Final fill:#0891b2,color:white
    `
  },
  {
    id: "slider-agent",
    title: "SLIDER Agent - Presentation Gen",
    role: "Full Stack AI Engineer",
    shortDescription: "Multi-model orchestration using Gemini to generate images, content, and code for slides from a prompt.",
    overview: "Built an AI-powered presentation agent that transforms a single user prompt into a complete, high-quality slide deck using multiple Gemini models specialized for planning, image generation, and code/content generation. Assets are stored in S3 and displayed via a rich UI.",
    techStack: ["Gemini 2.5 Flash", "Gemini 3 Pro", "Docker", "AWS S3", "AWS EC2"],
    associatedSkills: ["Multi-model Orchestration", "Generative AI", "AWS S3", "Asset Management"],
    links: {
      docker: "https://hub.docker.com/repository/docker/telugumallesh/mindslide-ai/general"
    },
    mermaidChart: `
      graph LR
        User[User Prompt] --> Plan[Gemini 2.5 Flash: Planner]
        Plan --> Structure[Slide Outline]
        Structure --> Par{Parallel Process}
        Par --> Img[Gemini 2.5 Flash Image]
        Par --> Content[Gemini 3 Pro: Content/Code]
        Img --> S3[AWS S3 Storage]
        Content --> Merge[Slide Assembler]
        S3 --> Merge
        Merge --> UI[Frontend Presentation UI]
        Merge --> Export[PDF/PPT Export]
        style Plan fill:#2563eb,color:white
        style Img fill:#e11d48,color:white
        style Content fill:#e11d48,color:white
    `
  }
];

export const getIconForProject = (id: string) => {
  switch (id) {
    case 'fssai-rag': return <Database className="w-6 h-6 text-primary" />;
    case 'stock-agent': return <Terminal className="w-6 h-6 text-secondary" />;
    case 'test-case-gen': return <Code className="w-6 h-6 text-accent" />;
    case 'deep-chat': return <Brain className="w-6 h-6 text-purple-500" />;
    case 'slider-agent': return <Presentation className="w-6 h-6 text-green-500" />;
    default: return <Layers className="w-6 h-6 text-gray-400" />;
  }
};