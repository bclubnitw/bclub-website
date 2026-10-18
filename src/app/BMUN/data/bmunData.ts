export interface Delegation {
  no: number;
  delegation: string;
  bloc: string;
  stance: string;
}

export interface Committee {
  id: "ecofin" | "ecosoc";
  name: string;
  fullName: string;
  agenda: string;
  discussionExpectations: string[];
  blocs: string[];
  portfolios: Delegation[];
}

export const BMUN_COMMITTEES: Record<"ecofin" | "ecosoc", Committee> = {
  ecofin: {
    id: "ecofin",
    name: "ECOFIN",
    fullName: "United Nations General Assembly Second Committee: Economic and Financial (ECOFIN)",
    agenda: "Regulating Offshore Private Capital and Restructuring Sovereign Debt to Accelerate Sustainable Development Financing",
    discussionExpectations: [
      "Macroeconomic Global Architecture: Developing nations will push for structural reforms to curb Illicit Financial Flows (IFFs), crack down on tax evasion, and introduce legally binding UN frameworks mandating private creditors (hedge funds, asset managers) to participate in sovereign debt restructuring alongside public lenders.",
      "The Free-Market Pushback: Western financial powerhouses advocate for market-based incentives, voluntary ESG guidelines, and strict protection of private property rights to prevent capital flight, resisting rigid UN mandates.",
      "Offshore Jurisdictions & Sovereignty: Financial secrecy hubs and offshore gateways defend low-tax regimes and regulatory autonomy, arguing competitive tax structures drive global liquidity and cross-border investment.",
      "The Crucial Compromise: Negotiating the establishment of a UN Tax Convention, enforcing international transparency standards without choking private capital, and shielding vulnerable economies from predatory high-interest debt."
    ],
    blocs: ["All", "Financial Hub", "Emerging Power", "Offshore Hub", "Developing Nation"],
    portfolios: [
      { no: 1, delegation: "United States", bloc: "Financial Hub", stance: "Withdrew from UN tax negotiations and secured a G7/OECD 'side-by-side' carve-out for US multinationals. Cut aid, favours market-led private capital and bilateral deals, and opposes global wealth/billionaire taxes." },
      { no: 2, delegation: "United Kingdom", bloc: "Financial Hub", stance: "Pro-OECD, wary of a UN tax body overriding existing treaties. Abolished the non-dom regime (2025), is cutting aid toward 0.3% of GNI, and must manage Overseas Territory transparency." },
      { no: 3, delegation: "Switzerland", bloc: "Financial Hub", stance: "Backs automatic information exchange but defends financial privacy and rejects wealth taxes. Prefers the OECD to the UN for tax rules; promotes ESG funds." },
      { no: 4, delegation: "Germany", bloc: "Financial Hub", stance: "Supports tax transparency and EU green taxonomy but prefers the OECD forum. Constrained by budget limits, so leans on private finance and blended instruments for development." },
      { no: 5, delegation: "France", bloc: "Financial Hub", stance: "Leading advocate for solidarity levies (premium flights, private jets) and fairer taxation of the ultra-rich. Supports debt relief and the Paris Pact for People and Planet." },
      { no: 6, delegation: "Japan", bloc: "Financial Hub", stance: "Major bilateral lender and quality-infrastructure investor. Favours the OECD process, orderly debt restructuring via the Common Framework, and private co-financing." },
      { no: 7, delegation: "Canada", bloc: "Financial Hub", stance: "Pension funds are big Global South infrastructure investors. Dropped its digital services tax in 2025 under US pressure; supports blended finance and OECD tax cooperation." },
      { no: 8, delegation: "Netherlands", bloc: "Financial Hub", stance: "Major conduit economy under reform, with new withholding taxes on tax-haven flows. Supports transparency and engages in UN talks, but protects existing treaty networks." },
      { no: 9, delegation: "China", bloc: "Emerging Power", stance: "Largest bilateral creditor; backs the UN as a venue for tax and finance talks and criticises Western dominance. Favours loans restructured case by case and the NDB/AIIB as alternatives." },
      { no: 10, delegation: "India", bloc: "Emerging Power", stance: "Supports the UN tax convention and Global South taxing rights over multinationals. Wants more affordable climate finance and tech transfer; promotes GIFT City as an onshore finance hub." },
      { no: 11, delegation: "Brazil", bloc: "Emerging Power", stance: "COP30 host and champion of taxing the super-rich (2% billionaire minimum tax idea from its G20 year). Backs the Baku-to-Belém $1.3T roadmap and the Tropical Forests Forever Facility." },
      { no: 12, delegation: "South Africa", bloc: "Emerging Power", stance: "Led the 2025 G20 with a push on inequality and debt burdens. Backs the UN tax convention, cheaper capital for Africa and reform of credit rating methods; exited the FATF grey list in 2025." },
      { no: 13, delegation: "United Arab Emirates", bloc: "Emerging Power", stance: "Capital magnet with a 9% corporate tax and a post-grey-list clean-up. Opposes wealth taxes, favours sovereign-wealth co-investment and sees itself as a bridge between North and South." },
      { no: 14, delegation: "Saudi Arabia", bloc: "Emerging Power", stance: "Sovereign wealth powerhouse via the PIF investing worldwide while building domestic giga-projects. Opposes binding debt-restructuring rules that treat sovereign funds like concessional donors." },
      { no: 15, delegation: "Indonesia", bloc: "Emerging Power", stance: "Pushes downstream minerals industrialisation and debt-for-climate swaps (JETP). Backs fairer global tax rules while keeping national investment incentives intact." },
      { no: 16, delegation: "Singapore", bloc: "Offshore Hub", stance: "Top wealth and treasury hub with strict anti-money-laundering controls after major asset-seizure cases. Defends its territorial tax model while joining OECD Pillar Two." },
      { no: 17, delegation: "Luxembourg", bloc: "Offshore Hub", stance: "Leading EU investment-fund domicile with a huge cross-border asset management industry. Implements EU transparency rules but protects fund structuring flexibility." },
      { no: 18, delegation: "Panama", bloc: "Offshore Hub", stance: "Working to stay off international tax and money-laundering grey/black lists. Defends service-sector competitiveness while agreeing to exchange tax data upon request." },
      { no: 19, delegation: "Ireland", bloc: "Offshore Hub", stance: "Major European tech and pharma treasury gateway, now collecting a 15% minimum corporate tax under OECD Pillar Two. Resists further erosion of national tax sovereignty." },
      { no: 20, delegation: "Liechtenstein", bloc: "Offshore Hub", stance: "Niche private-wealth and trust jurisdiction with strong banking secrecy traditions, now aligned with EEA transparency standards but resisting global wealth levies." },
      { no: 21, delegation: "Mauritius", bloc: "Offshore Hub", stance: "Primary investment conduit into India and Africa; reformed its substance requirements to meet international standards while defending its low-tax treaty network." },
      { no: 22, delegation: "Nigeria", bloc: "Developing Nation", stance: "Heavily burdened by external debt-servicing costs eating up government revenues. Champions the UN tax convention and demands international cooperation to repatriate illicit capital." },
      { no: 23, delegation: "Kenya", bloc: "Developing Nation", stance: "Faced severe domestic unrest over IMF-mandated tax hikes in 2024–2025. Pushes for debt relief, lower borrowing costs, and concessional climate finance over austerity." },
      { no: 24, delegation: "Barbados", bloc: "Developing Nation", stance: "Spearheading the Bridgetown Initiative for global financial architecture reform, demanding climate-resilient debt clauses and IMF special drawing rights reallocations." },
      { no: 25, delegation: "Argentina", bloc: "Developing Nation", stance: "Navigating deep IMF restructuring programs while shifting to aggressive free-market deregulation under current leadership; sceptical of UN-led wealth redistributions." },
      { no: 26, delegation: "Sri Lanka", bloc: "Developing Nation", stance: "Emerging from historic sovereign debt default; demands equitable burden-sharing between bilateral creditors and private bondholders under IMF surveillance." },
      { no: 27, delegation: "Egypt", bloc: "Developing Nation", stance: "Managing massive debt refinancing alongside currency devaluations; advocates for multilateral support, debt-for-nature swaps, and concessional development loans." },
      { no: 28, delegation: "Bangladesh", bloc: "Developing Nation", stance: "Undergoing economic recalibration; seeks non-predatory sustainable development financing, preferential credit terms, and international action against illicit capital flight." },
      { no: 29, delegation: "Mexico", bloc: "Developing Nation", stance: "Balancing nearshoring foreign direct investment inflows with domestic fiscal constraints; supports regional anti-evasion measures and OECD transparency initiatives." },
      { no: 30, delegation: "Ghana", bloc: "Developing Nation", stance: "Completed external debt restructuring under the G20 Common Framework; advocates for structural fixes to credit-rating agency biases against African sovereigns." }
    ]
  },
  ecosoc: {
    id: "ecosoc",
    name: "ECOSOC",
    fullName: "UN Economic and Social Council (ECOSOC) – Special Session on Algorithmic Labor",
    agenda: "International Framework on AI-Driven Labor Displacement and Job Protection Guarantees",
    discussionExpectations: [
      "Sovereignty vs. Corporate Power: Labor-vulnerable nations (India, France, Brazil, Philippines) will demand binding 'Robot Taxes' and mandatory human employment quotas in sectors like BPO, IT, and logistics to prevent socioeconomic collapse.",
      "The Free-Market Pushback: Tech giants (OpenAI, Meta, NVIDIA, Microsoft) holding full voting seats will argue that artificial job protections kill innovation, leveraging threats of pulling cloud infrastructure or data centers from over-regulating states.",
      "Unlikely Coalitions: Real progress hinges on hybrid compromises, such as corporate-funded retraining trusts, automation windfall transition funds, and tax credits for 'augmentation-first' AI models that assist humans rather than replacing them."
    ],
    blocs: ["All", "Sovereign State", "Corporation"],
    portfolios: [
      { no: 1, delegation: "United States", bloc: "Sovereign State", stance: "Pro-innovation, anti-binding rules. Backs federal pre-emption of state AI laws and treats AI leadership as a race with China; open to disclosure of AI-linked layoffs but opposes quotas and robot taxes." },
      { no: 2, delegation: "United Kingdom", bloc: "Sovereign State", stance: "Light-touch, pro-growth approach (AI Opportunities Action Plan) with no binding AI law yet. Wants City automation managed through retraining and voluntary standards, not caps." },
      { no: 3, delegation: "Germany", bloc: "Sovereign State", stance: "Defends the EU AI Act and works-council co-determination, though it accepts the 'Digital Omnibus' delay of high-risk rules to Dec 2027. Wants worker consultation before AI rollouts in industry." },
      { no: 4, delegation: "France", bloc: "Sovereign State", stance: "Champions EU sovereignty and European AI champions while pushing 'simplification' of the AI Act. Open to taxing automation gains and to a global governance body." },
      { no: 5, delegation: "Canada", bloc: "Sovereign State", stance: "Innovation-first under its Minister of AI; favours voluntary codes and funded reskilling. Cautious about measures that would anger the US as trade talks continue." },
      { no: 6, delegation: "India", bloc: "Sovereign State", stance: "Hosted the Feb 2026 AI Impact Summit and pitches 'AI for all'. Fears IT/BPO shock (TCS and peers cutting roles, H-1B fee hike) and wants phased transition, skilling funds and tech transfer." },
      { no: 7, delegation: "China", bloc: "Sovereign State", stance: "Pushes its 'AI+' plan and a UN-centred body for AI cooperation (WAICO proposal). Supports capacity-building for the Global South, rejects Western-led rules and export controls, stresses employment stability." },
      { no: 8, delegation: "Japan", bloc: "Sovereign State", stance: "Shrinking workforce makes automation a solution; light-touch AI Promotion Act. Supports human-centric AI and reskilling, opposes taxes or quotas that slow adoption." },
      { no: 9, delegation: "Republic of Korea", bloc: "Sovereign State", stance: "First to enforce a comprehensive AI Basic Act (in force Jan 2026). Balances chip/robotics exports with strong unions; backs labelling and transparency over hard job quotas." },
      { no: 10, delegation: "Singapore", bloc: "Sovereign State", stance: "Agile, pro-business model: governance by testing frameworks and SkillsFuture-style upskilling. Opposes rigid global quotas; offers itself as a neutral compromise drafter." },
      { no: 11, delegation: "Philippines", bloc: "Sovereign State", stance: "Call-centre/BPO sector (~1.7m+ workers) is directly exposed. ASEAN chair in 2026; seeks transition funding, reskilling pathways and a phased timeline for offshore services." },
      { no: 12, delegation: "United Arab Emirates", bloc: "Sovereign State", stance: "Aggressive AI investor (MGX, Stargate UAE, chips deals). Opposes labour-protection mandates and caps, favours investment-friendly rules and talent visas." },
      { no: 13, delegation: "Saudi Arabia", bloc: "Sovereign State", stance: "Vision 2030 diversification via HUMAIN and data-centre build-out. Wants access to advanced chips and no binding limits; supports voluntary ethics principles." },
      { no: 14, delegation: "Nigeria", bloc: "Sovereign State", stance: "Rapidly expanding young tech workforce; demands equitable AI access, open data architectures, and multilateral funds to avoid digital recolonisation." },
      { no: 15, delegation: "South Africa", bloc: "Sovereign State", stance: "Grappling with high youth unemployment; fears accelerated job destruction in telecommunications and banking without binding corporate transition pledges." },
      { no: 16, delegation: "Brazil", bloc: "Sovereign State", stance: "Pushes for digital sovereignty, algorithmic fairness, and worker protection clauses, warning that automated agricultural and service platforms deepen inequality." },
      { no: 17, delegation: "Mexico", bloc: "Sovereign State", stance: "Balances manufacturing automation in automotive supply chains with call center employment; seeks binational technology partnerships with the US." },
      { no: 18, delegation: "Estonia", bloc: "Sovereign State", stance: "World leader in digital public administration (e-Estonia); advocates for AI adoption in civil services with strong data governance, opposing restrictive quotas." },
      { no: 19, delegation: "Switzerland", bloc: "Sovereign State", stance: "Top AI research hub (ETH Zürich); advocates for precision governance, decentralized standards, and safeguarding IP rights without excessive bureaucracy." },
      { no: 20, delegation: "Netherlands", bloc: "Sovereign State", stance: "Home to ASML lithography; advocates for multilateral export stability, ethical AI frameworks, and lifelong adult education transition accounts." },
      { no: 21, delegation: "Ethiopia", bloc: "Sovereign State", stance: "Developing industrial digital parks; advocates for technological leapfrogging assistance and safeguards against premature deindustrialization caused by global robotics." },
      { no: 22, delegation: "Indonesia", bloc: "Sovereign State", stance: "Largest Southeast Asian digital economy; seeks tech transfer from global hyperscalers while demanding local data center employment guarantees." },
      { no: 23, delegation: "Vietnam", bloc: "Sovereign State", stance: "Crucial electronics assembly and software outsourcing center; advocates for balanced technological upgrade timelines that safeguard factory floor jobs." },
      { no: 24, delegation: "Egypt", bloc: "Sovereign State", stance: "Expanding digital outsourcing hubs in Cairo; demands international support for AI reskilling and digital infrastructure grants." },
      { no: 25, delegation: "Microsoft", bloc: "Corporation", stance: "Pushes 'copilot' augmentation over replacement while cutting thousands of roles to fund AI capex. Backs risk-based regulation and voluntary safeguards; opposes binding quotas." },
      { no: 26, delegation: "OpenAI", bloc: "Corporation", stance: "Public-benefit corporation racing toward more capable models. Opposes capability caps and state-by-state rules; floats safety nets and policy ideas on 'AI dividends' instead of bans." },
      { no: 27, delegation: "NVIDIA", bloc: "Corporation", stance: "Supplier of the compute behind the boom. Lobbies against chip export controls, says AI creates jobs, and rejects any compute licensing or mobility limits." },
      { no: 28, delegation: "Meta", bloc: "Corporation", stance: "Open-weight model strategy and heavy superintelligence spending alongside layoffs. Opposes central licensing; says open-source spreads benefits and avoids concentration." },
      { no: 29, delegation: "Alphabet (Google)", bloc: "Corporation", stance: "Cloud and Gemini-led automation of knowledge work. Supports reskilling funds and certain transparency steps; resists robot taxes and prescriptive audits." },
      { no: 30, delegation: "Amazon", bloc: "Corporation", stance: "Warehouse robotics at scale and large corporate cuts since late 2025. Argues automation creates new roles; opposes quotas and automation taxation, threatens to relocate hubs." },
      { no: 31, delegation: "Accenture", bloc: "Corporation", stance: "Restructured around AI, exiting staff who can't reskill. Sells AI-transition consulting; backs workforce reskilling programs and flexible governance, not hiring mandates." },
      { no: 32, delegation: "Tata Consultancy Services", bloc: "Corporation", stance: "Cut roughly 12,000 jobs (about 2%) in 2025 while investing in AI services. Defends human-in-the-loop delivery and offers reskilling; wants phased rules to protect India's IT exports." }
    ]
  }
};