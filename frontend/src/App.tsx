import { useState } from 'react'
import {
  FolderCode,
  Globe,
  Play,
  Settings,
  Sparkles,
  Zap,
  Activity,
  Code2,
  FileText,
  Workflow,
  Send,
  CheckCircle2,
  Clock,
  ChevronRight
} from 'lucide-react'

type TabType = 'params' | 'headers' | 'body' | 'auth' | 'tests'

export default function App() {
  const [method, setMethod] = useState<'GET' | 'POST' | 'PUT' | 'DELETE'>('POST')
  const [url, setUrl] = useState('https://api.forge.dev/v1/workspaces/sync')
  const [activeTab, setActiveTab] = useState<TabType>('body')
  const [requestBody, setRequestBody] = useState(`{\n  "workspaceId": "ws_alpha_01",\n  "environment": "production",\n  "autoGenerateTests": true\n}`)
  const [responseStatus, setResponseStatus] = useState<number | null>(null)
  const [responseTime, setResponseTime] = useState<number | null>(null)
  const [responseBody, setResponseBody] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = () => {
    setIsLoading(true)
    setTimeout(() => {
      setResponseStatus(200)
      setResponseTime(142)
      setResponseBody(
        JSON.stringify(
          {
            success: true,
            status: "synced",
            timestamp: new Date().toISOString(),
            data: {
              workspace: "API Forge Core",
              syncedCollections: 12,
              activeFlows: 4,
              testsSynthesized: 18
            }
          },
          null,
          2
        )
      )
      setIsLoading(false)
    }, 450)
  }

  const methodColors: Record<string, string> = {
    GET: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    POST: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    PUT: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    DELETE: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
  }

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 bg-slate-900/60 flex flex-col justify-between shrink-0">
        <div>
          {/* Brand */}
          <div className="p-4 border-b border-slate-800 flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-sm tracking-wide text-white">API Forge</h1>
              <p className="text-xs text-slate-400">Dev & Test Platform</p>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="p-3 space-y-1">
            <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm font-medium rounded-md bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
              <Code2 className="h-4 w-4" />
              <span>Request Builder</span>
            </button>
            <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm font-medium rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition">
              <FolderCode className="h-4 w-4" />
              <span>Collections</span>
            </button>
            <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm font-medium rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition">
              <Workflow className="h-4 w-4" />
              <span>Flow Builder</span>
            </button>
            <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm font-medium rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition">
              <Globe className="h-4 w-4" />
              <span>Environments</span>
            </button>
            <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm font-medium rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition">
              <Activity className="h-4 w-4" />
              <span>Performance</span>
            </button>
            <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm font-medium rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition">
              <FileText className="h-4 w-4" />
              <span>Documentation</span>
            </button>
          </nav>
        </div>

        {/* User / Workspace */}
        <div className="p-3 border-t border-slate-800">
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-slate-700 flex items-center justify-center text-xs font-semibold">
                AF
              </div>
              <div className="text-left">
                <p className="text-xs font-medium text-slate-200">Main Workspace</p>
                <p className="text-[10px] text-slate-500">Free Tier</p>
              </div>
            </div>
            <Settings className="h-4 w-4 text-slate-400 hover:text-slate-200 cursor-pointer transition" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-slate-950">
        {/* Top bar */}
        <header className="h-14 border-b border-slate-800 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span>Workspaces</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-slate-200 font-medium">Auth & Management Service</span>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-md hover:opacity-90 transition shadow-md shadow-violet-500/20">
              <Sparkles className="h-3.5 w-3.5" />
              <span>AI Test Generator</span>
            </button>
          </div>
        </header>

        {/* Request Address Bar */}
        <div className="p-6 border-b border-slate-800/80 bg-slate-900/30">
          <div className="flex gap-2">
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value as any)}
              className={`px-3 py-2 rounded-md font-mono text-xs font-bold border outline-none cursor-pointer ${methodColors[method]}`}
            >
              <option value="GET" className="bg-slate-900 text-emerald-400">GET</option>
              <option value="POST" className="bg-slate-900 text-amber-400">POST</option>
              <option value="PUT" className="bg-slate-900 text-blue-400">PUT</option>
              <option value="DELETE" className="bg-slate-900 text-rose-400">DELETE</option>
            </select>

            <div className="relative flex-1">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-md px-3.5 py-2 text-sm font-mono text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50"
                placeholder="https://api.example.com/v1/..."
              />
            </div>

            <button
              onClick={handleSend}
              disabled={isLoading}
              className="flex items-center gap-2 px-5 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition disabled:opacity-50 shadow-md shadow-indigo-600/30"
            >
              {isLoading ? (
                <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              <span>Send</span>
            </button>
          </div>
        </div>

        {/* Panes Split Grid */}
        <div className="flex-1 grid grid-cols-2 divide-x divide-slate-800 overflow-hidden">
          {/* Left Editor Pane */}
          <div className="flex flex-col h-full overflow-hidden bg-slate-900/10">
            {/* Tabs */}
            <div className="flex border-b border-slate-800 px-4">
              {(['params', 'headers', 'body', 'auth', 'tests'] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 py-2.5 text-xs font-medium capitalize border-b-2 transition ${
                    activeTab === tab
                      ? 'border-indigo-500 text-indigo-400'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 p-4 overflow-auto">
              {activeTab === 'body' && (
                <div className="h-full flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-slate-400 font-mono">JSON Body</span>
                    <button className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                      <Sparkles className="h-3 w-3" /> Auto-format
                    </button>
                  </div>
                  <textarea
                    value={requestBody}
                    onChange={(e) => setRequestBody(e.target.value)}
                    className="flex-1 w-full p-3 font-mono text-xs bg-slate-900 border border-slate-800 rounded-lg text-slate-200 resize-none focus:outline-none focus:border-indigo-500 font-normal"
                    spellCheck={false}
                  />
                </div>
              )}
              {activeTab !== 'body' && (
                <div className="h-full flex items-center justify-center text-slate-500 text-xs">
                  Configure {activeTab} parameters and options
                </div>
              )}
            </div>
          </div>

          {/* Right Response Pane */}
          <div className="flex flex-col h-full overflow-hidden bg-slate-900/20">
            <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2.5">
              <span className="text-xs font-medium text-slate-400">Response</span>
              {responseStatus && (
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {responseStatus} OK
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Clock className="h-3.5 w-3.5" />
                    {responseTime} ms
                  </span>
                </div>
              )}
            </div>

            <div className="flex-1 p-4 overflow-auto">
              {responseBody ? (
                <pre className="p-4 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-emerald-300 overflow-auto max-h-full">
                  {responseBody}
                </pre>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-500 text-xs space-y-2">
                  <Play className="h-8 w-8 text-slate-700" />
                  <p>Click "Send" to execute request and view response</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
