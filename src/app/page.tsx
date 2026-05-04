export default function Home() {
  return (
    <main className="flex-1">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--card-border)] bg-[var(--background)]/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">Shipyard Studio</div>
          <div className="hidden md:flex items-center gap-8 text-sm text-[var(--muted)]">
            <a href="#problem" className="hover:text-white transition-colors">The Problem</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#how" className="hover:text-white transition-colors">How We Work</a>
            <a href="#team" className="hover:text-white transition-colors">Team</a>
            <a href="#cta" className="px-4 py-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded-lg font-medium transition-colors">Start a Project</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Your Full Product Team.<br />No Payroll.
          </h1>
          <p className="text-xl md:text-2xl text-[var(--muted)] mb-10 max-w-2xl mx-auto leading-relaxed">
            We embed strategists, engineers, and growth experts with you — from first line of code to first 10,000 users. You get a unified team chasing outcomes, not a vendor chasing billable hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#cta" className="px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded-lg font-semibold text-lg transition-colors">
              Start a Project
            </a>
            <a href="#services" className="px-8 py-4 border border-[var(--card-border)] hover:border-[var(--muted)] rounded-lg font-semibold text-lg transition-colors">
              See How We Work
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 px-6 bg-[var(--card)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Founders Stopped Trusting Agencies</h2>
          <p className="text-[var(--muted)] text-center mb-16 max-w-2xl mx-auto">Most agencies deliver code. We deliver outcomes.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-[var(--card-border)] bg-[var(--background)]">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-3">The Code Problem</h3>
              <p className="text-[var(--muted)]">You got a website. It loads fast. But nobody&apos;s using it.</p>
            </div>
            
            <div className="p-8 rounded-xl border border-[var(--card-border)] bg-[var(--background)]">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-3">The Insight Problem</h3>
              <p className="text-[var(--muted)]">You hired a developer, not a product person. They built what you asked for, not what you needed.</p>
            </div>
            
            <div className="p-8 rounded-xl border border-[var(--card-border)] bg-[var(--background)]">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3">The Growth Problem</h3>
              <p className="text-[var(--muted)]">Post-launch, nobody&apos;s accountable for whether this thing actually works.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">One Team. Every Discipline. Tied to Your Growth.</h2>
          <p className="text-[var(--muted)] text-center mb-16 max-w-2xl mx-auto">Most shops hand you code and walk away. We stay until your product is working.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-[var(--card-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Product Strategy</h3>
              <p className="text-[var(--muted)] text-sm mb-4">Discovery, positioning, MVP definition, roadmap planning</p>
              <p className="text-sm">We validate the problem before we solve it. Customer interviews, competitive analysis, hypothesis-driven planning.</p>
              <div className="mt-4 pt-4 border-t border-[var(--card-border)]">
                <span className="text-xs text-[var(--accent)] font-medium">Output: A product brief that proves we&apos;re building the right thing.</span>
              </div>
            </div>
            
            <div className="p-8 rounded-xl border border-[var(--card-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Product Engineering</h3>
              <p className="text-[var(--muted)] text-sm mb-4">Full-stack development, UI/UX, API design, integration</p>
              <p className="text-sm">React + TypeScript + Next.js. We ship production-quality code from day one.</p>
              <div className="mt-4 pt-4 border-t border-[var(--card-border)]">
                <span className="text-xs text-[var(--accent)] font-medium">Output: A functioning product that your users can actually use.</span>
              </div>
            </div>
            
            <div className="p-8 rounded-xl border border-[var(--card-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth & Monetization</h3>
              <p className="text-[var(--muted)] text-sm mb-4">Conversion optimization, retention strategy, analytics, A/B testing</p>
              <p className="text-sm">We don&apos;t leave at launch. We optimize until this thing is making money.</p>
              <div className="mt-4 pt-4 border-t border-[var(--card-border)]">
                <span className="text-xs text-[var(--accent)] font-medium">Output: A growing product with a monetization engine attached.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different Section */}
      <section id="how" className="py-24 px-6 bg-[var(--card)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How We&apos;re Different</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--card-border)]">
                  <th className="text-left py-4 pr-8 font-semibold"></th>
                  <th className="text-left py-4 px-4 font-semibold text-[var(--muted)]">Traditional Agency</th>
                  <th className="text-left py-4 px-4 font-semibold text-[var(--accent)]">Shipyard Studio</th>
                </tr>
              </thead>
              <tbody className="text-lg">
                <tr className="border-b border-[var(--card-border)]">
                  <td className="py-4 pr-8 text-[var(--muted)]">Scope</td>
                  <td className="py-4 px-4">Fixed SOW</td>
                  <td className="py-4 px-4 text-[var(--accent)]">Ongoing retainer</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="py-4 pr-8 text-[var(--muted)]">Team</td>
                  <td className="py-4 px-4">Whatever&apos;s available</td>
                  <td className="py-4 px-4 text-[var(--accent)]">Strategist + Engineer + Growth</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="py-4 pr-8 text-[var(--muted)]">Success metric</td>
                  <td className="py-4 px-4">Code delivered</td>
                  <td className="py-4 px-4 text-[var(--accent)]">Revenue/user growth</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="py-4 pr-8 text-[var(--muted)]">Post-launch</td>
                  <td className="py-4 px-4">No accountability</td>
                  <td className="py-4 px-4 text-[var(--accent)]">We stay until it works</td>
                </tr>
                <tr>
                  <td className="py-4 pr-8 text-[var(--muted)]">Communication</td>
                  <td className="py-4 px-4">Status reports</td>
                  <td className="py-4 px-4 text-[var(--accent)]">Weekly Loom updates</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl font-medium mb-6">Ready to Stop Buying Code and Start Building Products?</p>
            <a href="#cta" className="inline-block px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded-lg font-semibold text-lg transition-colors">
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Built by Product People, Not Just Developers</h2>
          <p className="text-[var(--muted)] text-center mb-16 max-w-2xl mx-auto">We&apos;re not a dev shop that added a &quot;growth&quot; tag. We&apos;re a full product team that happens to have engineers on it.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-[var(--card-border)] text-center">
              <div className="w-20 h-20 rounded-full bg-[var(--accent)]/20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🧭</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Product Strategist</h3>
              <p className="text-[var(--muted)] text-sm">Validates problems, defines roadmaps, keeps us building the right thing</p>
            </div>
            
            <div className="p-8 rounded-xl border border-[var(--card-border)] text-center">
              <div className="w-20 h-20 rounded-full bg-[var(--accent)]/20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth Engineer</h3>
              <p className="text-[var(--muted)] text-sm">Optimizes post-launch, owns retention and monetization</p>
            </div>
            
            <div className="p-8 rounded-xl border border-[var(--card-border)] text-center">
              <div className="w-20 h-20 rounded-full bg-[var(--accent)]/20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Frontend/Full-Stack Engineer</h3>
              <p className="text-[var(--muted)] text-sm">Ships production-quality code fast</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="proof" className="py-24 px-6 bg-[var(--card)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Happens When You Stop Buying Code</h2>
          <p className="text-[var(--muted)] text-center mb-16 max-w-2xl mx-auto">Case studies and testimonials will be added as we work with clients.</p>
          
          <div className="bg-[var(--background)] rounded-xl border border-[var(--card-border)] p-8 md:p-12 text-center">
            <p className="text-xl md:text-2xl italic mb-6 text-[var(--muted)]">
              &quot;We hired Shipyard to build our MVP. Three months later we&apos;d launched, found product-market fit, and started raising.&quot;
            </p>
            <p className="text-sm text-[var(--muted)]">— [Founder name], [Company]</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Talk About Your Product</h2>
          <p className="text-[var(--muted)] mb-10">
            Not sure if we&apos;re the right fit? Most conversations start with a 30-minute discovery call. No pitch, no commitment. Just honest talk about what you&apos;re building and whether we can help.
          </p>
          
          <form className="space-y-4 text-left">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--card)] border border-[var(--card-border)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--card)] border border-[var(--card-border)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
              <input 
                type="text" 
                id="company" 
                name="company"
                className="w-full px-4 py-3 rounded-lg bg-[var(--card)] border border-[var(--card-border)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">What are you building?</label>
              <textarea 
                id="message" 
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg bg-[var(--card)] border border-[var(--card-border)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your product idea, current challenge, or what you're working on..."
              />
            </div>
            <button 
              type="submit"
              className="w-full px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded-lg font-semibold text-lg transition-colors"
            >
              Book a Discovery Call
            </button>
          </form>
          
          <p className="mt-8 text-sm text-[var(--muted)]">
            Or email us directly at <a href="mailto:hello@shipyardstudio.io" className="text-[var(--accent)] hover:underline">hello@shipyardstudio.io</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--card-border)]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[var(--muted)]">
            © 2025 Shipyard Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-[var(--muted)]">
            <a href="#problem" className="hover:text-white transition-colors">The Problem</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#team" className="hover:text-white transition-colors">Team</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
