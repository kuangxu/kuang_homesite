import { PublicationEntry, ConferenceEntry, ThesisEntry, MediaEntry, TalkEntry } from '../types/publications';

export const workingPapers: PublicationEntry[] = [
  {
    title: "Behavioral Generative Agents for Energy Operations",
    titleUrl: "https://arxiv.org/abs/2506.12664",
    coAuthors: [
      { name: "Cong Chen" },
      { name: "Omer Karaduman" }
    ],
    status: "submitted",
    year: "2025"
  },
  {
    title: "Shortlist Experiments",
    titleUrl: "https://drive.google.com/drive/folders/1yctHW8jdDNquE5Z2m6jOvUqr9imwwvh4?usp=drive_link",
    coAuthors: [
      { name: "Chao Qin" }
    ],
    status: "working-paper",
    year: "2025",
    links: [
      { label: "Extended Abstract", url: "https://drive.google.com/drive/folders/1yctHW8jdDNquE5Z2m6jOvUqr9imwwvh4?usp=drive_link", type: "other" }
    ]
  },
  {
    title: "Prioritizing Recurrent Services",
    titleUrl: "https://arxiv.org/abs/2509.11383",
    coAuthors: [
      { name: "Lin Franklin Feng" },
      { name: "Yue Hu" }
    ],
    status: "working-paper",
    year: "2025"
  },
  {
    title: "Experimenting under Stochastic Congestion",
    titleUrl: "https://arxiv.org/abs/2302.12093",
    coAuthors: [
      { name: "Shuangning Li", url: "https://lsn235711.github.io/" },
      { name: "Ramesh Johari", url: "https://web.stanford.edu/~rjohari/" },
      { name: "Stefan Wager", url: "https://web.stanford.edu/~swager/" }
    ],
    status: "submitted",
    year: "2025"
  },
  {
    title: "Learning Service Slowdown using Observational Data",
    titleUrl: "https://arxiv.org/abs/2401.07305",
    coAuthors: [
      { name: "Gal Mendelson", url: "https://dds.technion.ac.il/academicstaff/mendelson-gal/" }
    ],
    status: "submitted",
    year: "2025"
  },
  {
    title: "Nonstationary Bandit Learning via Predictive Sampling",
    titleUrl: "https://arxiv.org/abs/2205.01970",
    coAuthors: [
      { name: "Yueyang Liu", url: "https://yuey7x.github.io/" },
      { name: "Benjamin van Roy", url: "https://web.stanford.edu/~bvr/" }
    ],
    status: "submitted",
    year: "2025",
    links: [
      { label: "Preliminary version, AISTATS 2023", url: "https://proceedings.mlr.press/v206/liu23e/liu23e.pdf", type: "preliminary" }
    ]
  }
];

export const journalPublications: PublicationEntry[] = [
  {
    title: "Treatment Effects in Market Equilibrium",
    titleUrl: "https://arxiv.org/abs/2109.11647",
    coAuthors: [
      { name: "Evan Munro", url: "https://www.evanmunro.ca/" },
      { name: "Stefan Wager", url: "https://web.stanford.edu/~swager/" }
    ],
    journal: "American Economic Review",
    year: "2025",
    status: "forthcoming"
  },
  {
    title: "Load Balancing Using Sparse Communication",
    titleUrl: "https://arxiv.org/pdf/2206.02410",
    coAuthors: [
      { name: "Gal Mendelson", url: "https://dds.technion.ac.il/academicstaff/mendelson-gal/" }
    ],
    journal: "Operations Research",
    year: "2025",
    status: "forthcoming"
  },
  {
    title: "Weak Signal Asymptotics for Sequentially Randomized Experiments",
    titleUrl: "https://arxiv.org/abs/2101.09855",
    coAuthors: [
      { name: "Stefan Wager", url: "https://web.stanford.edu/~swager/" }
    ],
    journal: "Management Science",
    year: "2024"
  },
  {
    title: "Learner-Private Online Convex Optimization",
    titleUrl: "https://ieeexplore.ieee.org/document/9875320/",
    coAuthors: [
      { name: "Jiaming Xu", url: "https://www.fuqua.duke.edu/faculty/jiaming-xu" },
      { name: "Dana (Xiaoqian) Yang", url: "https://danayang.github.io/" }
    ],
    journal: "IEEE Transactions on Information Theory",
    year: "2022",
    volume: "69",
    pages: "528-547",
    links: [
      { label: "arXiv version", url: "https://arxiv.org/abs/2102.11976", type: "arxiv" },
      { label: "Preliminary Version, ICML 2021", url: "https://icml.cc/virtual/2021/poster/9455", type: "preliminary" }
    ]
  },
  {
    title: "Anonymous Stochastic Routing",
    titleUrl: "https://pubsonline.informs.org/doi/abs/10.1287/stsy.2021.0074",
    coAuthors: [
      { name: "Mine Su Erturk", url: "https://sites.google.com/stanford.edu/mserturk/home" }
    ],
    journal: "Stochastic Systems",
    year: "2022",
    volume: "12.1",
    pages: "92-126",
    links: [
      { label: "arXiv version", url: "https://arxiv.org/abs/1911.08875", type: "arxiv" }
    ],
    awards: ["Finalist, INFORMS George E. Nicholson Prize, 2019"]
  },
  {
    title: "Learning and Information in Stochastic Networks and Queues",
    titleUrl: "https://pubsonline.informs.org/doi/10.1287/educ.2021.0235",
    coAuthors: [
      { name: "Neil Walton" }
    ],
    journal: "INFORMS TutORials in Operations Research",
    year: "2021",
    pages: "161-198",
    links: [
      { label: "arXiv version", url: "https://arxiv.org/abs/2105.08769", type: "arxiv" }
    ]
  },
  {
    title: "Private Sequential Learning",
    titleUrl: "https://pubsonline.informs.org/doi/10.1287/opre.2020.2021",
    coAuthors: [
      { name: "John N. Tsitsiklis", url: "https://www.mit.edu/~jnt/home.html" },
      { name: "Zhi Xu", url: "https://scholar.google.com/citations?user=CbGdL4cAAAAJ&hl=en" }
    ],
    journal: "Operations Research",
    year: "2021",
    volume: "69",
    pages: "5:1575-1590",
    links: [
      { label: "arXiv version", url: "https://arxiv.org/abs/1805.02136", type: "arxiv" },
      { label: "Preliminary version, Conference on Learning Theory (COLT) 2018", url: "https://proceedings.mlr.press/v75/tsitsiklis18a.html", type: "preliminary" },
      { label: "Talk at COLT", url: "https://www.youtube.com/watch?v=TICOZ8HbG5k&t=1s", type: "talk" }
    ]
  },
  {
    title: "Temporal Concatenation for Markov Decision Processes",
    titleUrl: "https://www.cambridge.org/core/journals/probability-in-the-engineering-and-informational-sciences/article/abs/temporal-concatenation-for-markov-decision-processes/9F799719DCA333A132DCA3D957B2FD80",
    coAuthors: [
      { name: "Ruiyang Song", url: "https://rsong.me/" }
    ],
    journal: "Probability in the Engineering and Informational Sciences",
    year: "2021",
    pages: "1-28",
    links: [
      { label: "arXiv version", url: "https://arxiv.org/abs/2004.11555", type: "arxiv" }
    ]
  },
  {
    title: "Experimenting in Equilibrium",
    titleUrl: "https://pubsonline.informs.org/doi/abs/10.1287/mnsc.2020.3844",
    coAuthors: [
      { name: "Stefan Wager", url: "https://web.stanford.edu/~swager/" }
    ],
    journal: "Management Science",
    year: "2021",
    volume: "67",
    pages: "11: 6694-6715",
    links: [
      { label: "arXiv version", url: "https://arxiv.org/pdf/1903.02124.pdf", type: "arxiv" }
    ]
  },
  {
    title: "Information and Memory in Dynamic Resource Allocation",
    titleUrl: "https://pubsonline.informs.org/doi/abs/10.1287/opre.2019.1940",
    coAuthors: [
      { name: "Yuan Zhong" }
    ],
    journal: "Operations Research",
    year: "2020",
    volume: "68.6",
    pages: "1625-1931",
    links: [
      { label: "arXiv version", url: "https://arxiv.org/abs/1904.08365", type: "arxiv" },
      { label: "Preliminary version, ACM SIGMETRICS 2019", url: "http://web.stanford.edu/~kuangxu/papers/xz_sigm19.pdf", type: "preliminary" }
    ]
  },
  {
    title: "Reinforcement with Fading Memories",
    titleUrl: "https://pubsonline.informs.org/doi/10.1287/moor.2019.1031",
    coAuthors: [
      { name: "Se Young Yun", url: "https://fbsqkd.github.io/" }
    ],
    journal: "Mathematics of Operations Research",
    year: "2020",
    volume: "45.4",
    pages: "1193-1620",
    links: [
      { label: "arXiv version", url: "https://arxiv.org/pdf/1907.12227.pdf", type: "arxiv" },
      { label: "Preliminary version, ACM SIGMETRICS 2018", url: "https://dl.acm.org/citation.cfm?id=3219653", type: "preliminary" }
    ]
  },
  {
    title: "No Detectable Surge in SARS-CoV-2 Transmission due to the April 7, 2020 Wisconsin Election",
    titleUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7349432/",
    coAuthors: [
      { name: "Kathy Leung", url: "https://sites.google.com/view/kathysleung/home" },
      { name: "Joseph T. Wu", url: "https://scholar.google.com/citations?user=yUuqrBIAAAAJ&hl=en" },
      { name: "Lawrence M. Wein", url: "https://www.gsb.stanford.edu/faculty-research/faculty/lawrence-m-wein" }
    ],
    journal: "American Journal of Public Health",
    year: "2020",
    pages: "1123–1172"
  },
  {
    title: "Delay-Predictability Tradeoffs in Reaching a Secret Goal",
    titleUrl: "https://pubsonline.informs.org/doi/full/10.1287/opre.2017.1682",
    coAuthors: [
      { name: "John N. Tsitsiklis", url: "https://www.mit.edu/~jnt/home.html" }
    ],
    journal: "Operations Research",
    year: "2018",
    volume: "66.2",
    pages: "587-596",
    links: [
      { label: "SSRN version", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2784502", type: "other" }
    ]
  },
  {
    title: "On the Capacity of Information Processing Systems",
    titleUrl: "https://pubsonline.informs.org/doi/full/10.1287/opre.2017.1680",
    coAuthors: [
      { name: "Laurent Massoulié", url: "https://www.di.ens.fr/laurent.massoulie/" }
    ],
    journal: "Operations Research",
    year: "2018",
    volume: "66(2)",
    pages: "568-586",
    links: [
      { label: "arXiv version", url: "https://arxiv.org/abs/1603.00544", type: "arxiv" },
      { label: "Preliminary version, Conference on Learning Theory (COLT), 2016", url: "http://www.jmlr.org/proceedings/papers/v49/massoulie16.html", type: "preliminary" },
      { label: "Talk at COLT", url: "https://www.youtube.com/watch?v=dUMLi0Xf9Gc&t=31s", type: "talk" }
    ]
  },
  {
    title: "Flexible Queueing Architectures",
    titleUrl: "https://pubsonline.informs.org/doi/abs/10.1287/opre.2017.1620?journalCode=opre",
    coAuthors: [
      { name: "John N. Tsitsiklis", url: "https://www.mit.edu/~jnt/home.html" }
    ],
    journal: "Operations Research",
    year: "2017",
    volume: "65.5",
    pages: "1398–1413",
    links: [
      { label: "arXiv version", url: "https://arxiv.org/pdf/1505.07648.pdf", type: "arxiv" }
    ]
  },
  {
    title: "Using Future Information to Reduce Waiting Times in the Emergency Department via Diversion",
    titleUrl: "https://pubsonline.informs.org/doi/abs/10.1287/msom.2015.0573?journalCode=msom",
    coAuthors: [
      { name: "Carri W. Chan", url: "http://www.columbia.edu/~cc3179/" }
    ],
    journal: "Manufacturing & Service Operations Management (MSOM)",
    year: "2016",
    volume: "18.3",
    pages: "314 – 331",
    links: [
      { label: "Manuscript", url: "https://web.stanford.edu/~kuangxu/papers/EDAD_Xu_Chan_15.pdf", type: "manuscript" },
      { label: "GSB Insights coverage", url: "https://www.gsb.stanford.edu/insights/predictive-data-can-reduce-emergency-room-wait-times", type: "coverage" }
    ]
  },
  {
    title: "Necessity of Future Information in Admission Control",
    titleUrl: "https://pubsonline.informs.org/doi/10.1287/opre.2015.1406",
    journal: "Operations Research",
    year: "2015",
    volume: "63(5)",
    pages: "1213-1226",
    links: [
      { label: "Manuscript", url: "http://web.stanford.edu/~kuangxu/papers/LB_Xu15.pdf", type: "manuscript" }
    ]
  },
  {
    title: "Queueing with Future Information",
    titleUrl: "https://projecteuclid.org/euclid.aoap/1403812371",
    coAuthors: [
      { name: "Joel Spencer", url: "https://cs.nyu.edu/~spencer/" },
      { name: "Madhu Sudan", url: "https://madhu.seas.harvard.edu/" }
    ],
    journal: "Annals of Applied Probability",
    year: "2014",
    volume: "24.5",
    pages: "2091-2142",
    links: [
      { label: "arXiv version", url: "https://projecteuclid.org/euclid.aoap/1403812371", type: "arxiv" }
    ]
  },
  {
    title: "The Optimal Admission Threshold in Observable Queues with State Dependent Pricing",
    titleUrl: "https://www.cambridge.org/core/journals/probability-in-the-engineering-and-informational-sciences/article/the-optimal-admission-threshold-in-observable-queues-with-state-dependent-pricing/1F641237B90462375C990D81B53A5E10",
    coAuthors: [
      { name: "Christian Borgs", url: "http://christianborgs.com/" },
      { name: "Jennifer T. Chayes", url: "http://jenniferchayes.com/" },
      { name: "Sherwin Doroudi", url: "https://cse.umn.edu/isye/sherwin-doroudi" },
      { name: "Mor Harchol-Balter", url: "https://www.cs.cmu.edu/~harchol/" }
    ],
    journal: "Probability in the Engineering and Informational Sciences",
    year: "2014",
    volume: "28(1)",
    pages: "101-119",
    links: [
      { label: "Manuscript", url: "http://reports-archive.adm.cs.cmu.edu/anon/2012/CMU-CS-12-145.pdf", type: "manuscript" }
    ]
  },
  {
    title: "On the Power of (even a little) Resource Pooling",
    titleUrl: "https://pubsonline.informs.org/doi/abs/10.1287/11-SSY033",
    coAuthors: [
      { name: "John N. Tsitsiklis", url: "https://www.mit.edu/~jnt/home.html" }
    ],
    journal: "Stochastic Systems",
    year: "2012",
    volume: "2",
    pages: "1-66",
    awards: ["First Place, INFORMS George E. Nicholson Prize, 2021"],
    links: [
      { label: "Manuscript", url: "http://web.stanford.edu/~kuangxu/papers/TsiXuSSY12.pdf", type: "manuscript" },
      { label: "Errata", url: "https://web.stanford.edu/~kuangxu/papers/J140-kx-flexibility-correction.pdf", type: "other" }
    ]
  }
];

export const conferencePublications: ConferenceEntry[] = [
  {
    title: "Nonstationary Bandit Learning via Predictive Sampling",
    titleUrl: "https://arxiv.org/abs/2205.01970",
    coAuthors: [
      { name: "Yueyang Liu", url: "https://yuey7x.github.io/" },
      { name: "Benjamin van Roy", url: "https://web.stanford.edu/~bvr/" }
    ],
    conference: "Proceedings of International Conference on Artificial Intelligence and Statistics (AISTATS)",
    year: "2023"
  },
  {
    title: "Learner-Private Online Convex Optimization",
    titleUrl: "https://arxiv.org/pdf/2102.11976.pdf",
    coAuthors: [
      { name: "Jiaming Xu", url: "https://www.fuqua.duke.edu/faculty/jiaming-xu" },
      { name: "Dana (Xiaoqian) Yang", url: "https://danayang.github.io/" }
    ],
    conference: "Proceedings of International Conference on Machine Learning (ICML)",
    year: "2021"
  },
  {
    title: "Optimal Query Complexity for Private Sequential Learning against Eavesdropping",
    titleUrl: "http://proceedings.mlr.press/v130/xu21f/xu21f.pdf",
    coAuthors: [
      { name: "Jiaming Xu", url: "https://www.fuqua.duke.edu/faculty/jiaming-xu" },
      { name: "Dana (Xiaoqian) Yang", url: "https://danayang.github.io/" }
    ],
    conference: "Proceedings of International Conference on Artificial Intelligence and Statistics (AISTATS)",
    year: "2021",
    links: [
      { label: "arXiv version", url: "https://arxiv.org/abs/1909.09836", type: "arxiv" }
    ]
  },
  {
    title: "Information, Memory and Capacity in Dynamic Resource Allocation",
    titleUrl: "https://dl.acm.org/doi/10.1145/3309697.3331488",
    coAuthors: [
      { name: "Yuan Zhong", url: "https://www.google.com/search?client=safari&rls=en&q=Yuan+Zhong&ie=UTF-8&oe=UTF-8" }
    ],
    conference: "Proceedings of ACM SIGMETRICS",
    location: "Phoenix, Arizona",
    year: "2019",
    month: "June",
    links: [
      { label: "Extended technical report", url: "http://web.stanford.edu/~kuangxu/papers/xz_sigm19.pdf", type: "manuscript" }
    ]
  },
  {
    title: "Query Complexity of Bayesian Private Learning",
    titleUrl: "http://papers.nips.cc/paper/7510-query-complexity-of-bayesian-private-learning",
    conference: "Proceedings of the Conference on Neural Information Processing Systems (NeurIPS)",
    location: "Montreal",
    year: "2018",
    month: "December",
    links: [
      { label: "arXiv version", url: "https://arxiv.org/pdf/1911.06903.pdf", type: "arxiv" }
    ]
  },
  {
    title: "Private Sequential Learning",
    titleUrl: "http://proceedings.mlr.press/v75/tsitsiklis18a.html",
    coAuthors: [
      { name: "John N. Tsitsiklis", url: "https://www.mit.edu/~jnt/home.html" },
      { name: "Zhi Xu", url: "https://scholar.google.com/citations?user=CbGdL4cAAAAJ&hl=en" }
    ],
    conference: "Proceedings of the Conference on Learning Theory (COLT)",
    location: "Stockholm",
    year: "2018",
    month: "July",
    links: [
      { label: "Extended technical report", url: "https://arxiv.org/abs/1805.02136.pdf", type: "manuscript" },
      { label: "Talk", url: "https://www.youtube.com/watch?v=TICOZ8HbG5k&t=1s", type: "talk" }
    ]
  },
  {
    title: "Reinforcement with Fading Memories",
    titleUrl: "https://dl.acm.org/citation.cfm?id=3219653",
    coAuthors: [
      { name: "Se Young Yun", url: "https://fbsqkd.github.io/" }
    ],
    conference: "Proceedings of ACM SIGMETRICS",
    location: "Irvine, California",
    year: "2018",
    month: "June"
  },
  {
    title: "On the Capacity of Information Processing Systems",
    titleUrl: "http://proceedings.mlr.press/v49/massoulie16.pdf",
    coAuthors: [
      { name: "Laurent Massoulié", url: "https://www.di.ens.fr/laurent.massoulie/" }
    ],
    conference: "Proceedings of the Conference on Learning Theory (COLT)",
    location: "New York",
    year: "2016",
    month: "June",
    links: [
      { label: "Extended technical report", url: "https://arxiv.org/pdf/1603.00544.pdf", type: "manuscript" },
      { label: "Talk", url: "https://www.youtube.com/watch?v=dUMLi0Xf9Gc&t=31s", type: "talk" }
    ]
  },
  {
    title: "Queueing System Topologies with Limited Flexibility",
    titleUrl: "https://dl.acm.org/doi/abs/10.1145/2494232.2465757",
    coAuthors: [
      { name: "John N. Tsitsiklis", url: "https://www.mit.edu/~jnt/home.html" }
    ],
    conference: "Proceedings of ACM SIGMETRICS",
    location: "Pittsburgh",
    year: "2013",
    month: "June",
    awards: ["Best Paper Award and Kenneth C. Sevcik Outstanding Student Paper Award"],
    links: [
      { label: "Extended technical report", url: "http://web.stanford.edu/~kuangxu/papers/c-13-SigRep.pdf", type: "manuscript" }
    ]
  },
  {
    title: "On the Power of (even a little) Centralization in Distributed Processing",
    titleUrl: "http://web.stanford.edu/~kuangxu/papers/TsiXu11SIG.pdf",
    coAuthors: [
      { name: "John N. Tsitsiklis", url: "https://www.mit.edu/~jnt/home.html" }
    ],
    conference: "Proceedings of ACM SIGMETRICS",
    location: "San Jose",
    year: "2011",
    month: "June"
  },
  {
    title: "Self-Synchronizing Properties of CSMA Wireless Multi-hop Networks",
    titleUrl: "http://infoscience.epfl.ch/record/147917/files/XuDT10.pdf",
    coAuthors: [
      { name: "Olivier Dousse" },
      { name: "Patrick Thiran" }
    ],
    conference: "Proceedings of ACM SIGMETRICS",
    location: "New York",
    year: "2010",
    month: "June"
  },
  {
    title: "PAPR Reduction for Beamforming OFDM via Constellation-Beam Modification",
    titleUrl: "http://web.stanford.edu/~kuangxu/papers/XuJ09.pdf",
    coAuthors: [
      { name: "Douglas L. Jones" }
    ],
    conference: "Proceedings of the 43rd Asilomar Conference on Signals, Systems and Computers",
    location: "Pacific Grove",
    year: "2009",
    month: "November"
  },
  {
    title: "Promoting undergraduate research in ECE (PURE): Connecting undergraduates with graduate research mentors",
    titleUrl: "http://web.stanford.edu/~kuangxu/papers/09VAN01.pdf",
    coAuthors: [
      { name: "Elizabeth Van Ruitenbeek" }
    ],
    conference: "Proceedings of American Society for Engineering Education Conference & Exposition",
    year: "2009",
    month: "June",
    links: [
      { label: "PURE program website", url: "https://wiki.illinois.edu/wiki/display/PURE/Home", type: "other" },
      { label: "Illinois news coverage", url: "http://www.ece.illinois.edu/mediacenter/article.asp?id=377", type: "coverage" }
    ]
  }
];

export const theses: ThesisEntry[] = [
  {
    title: "On the Power of (even a little) Flexibility in Dynamic Resource Allocation",
    titleUrl: "https://dspace.mit.edu/handle/1721.1/91101",
    degree: "Ph.D. Thesis",
    institution: "Massachusetts Institute of Technology",
    year: "2014",
    month: "June",
    awards: ["Recipient of 2014 Dimitris N. Chorafas Foundation Award"]
  },
  {
    title: "On the Power of Centralization in Distributed Processing",
    titleUrl: "http://web.stanford.edu/~kuangxu/papers/mastersthesis.pdf",
    degree: "S.M. Thesis",
    institution: "Massachusetts Institute of Technology",
    year: "2011",
    month: "June",
    awards: ["First Place, Ernst A. Guillemin Thesis Award for Best S.M. Thesis in Electrical Engineering"]
  },
  {
    title: "Modeling and Analysis of Peer-to-Peer (P2P) Live Video Streaming",
    titleUrl: "http://web.stanford.edu/~kuangxu/papers/undergradthesis.pdf",
    degree: "Undergraduate Thesis",
    institution: "University of Illinois at Urbana-Champaign",
    year: "2009",
    month: "May"
  }
];

export const otherManuscripts: PublicationEntry[] = [
  {
    title: "Gaussian Imagination in Bandit Learning",
    titleUrl: "https://arxiv.org/abs/2201.01902",
    coAuthors: [
      { name: "Yueyang Liu", url: "https://yuey7x.github.io/" },
      { name: "Aditya Devraj" },
      { name: "Benjamin van Roy", url: "https://web.stanford.edu/~bvr/" }
    ]
  },
  {
    title: "A bit better? Quantifying information for bandit learning",
    titleUrl: "https://arxiv.org/pdf/2102.09488.pdf",
    coAuthors: [
      { name: "Aditya Devraj" },
      { name: "Benjamin van Roy", url: "https://web.stanford.edu/~bvr/" }
    ],
    links: [
      { label: "arXiv", url: "https://arxiv.org/pdf/2102.09488.pdf", type: "arxiv" }
    ]
  },
  {
    title: "Private Genetic Genealogy Search",
    titleUrl: "http://ssrn.com/abstract=3875606",
    coAuthors: [
      { name: "Mine Su Erturk", url: "https://sites.google.com/stanford.edu/mserturk/home" }
    ],
    notes: "M. S. Erturk and K. Xu, manuscript (2022)",
    links: [
      { label: "SSRN", url: "http://ssrn.com/abstract=3875606", type: "other" },
      { label: "Podcast", url: "https://engineering.stanford.edu/magazine/kuang-xu-how-make-and-keep-genetic-data-private", type: "other" },
      { label: "GSB News", url: "https://engineering.stanford.edu/magazine/kuang-xu-how-make-and-keep-genetic-data-private", type: "coverage" }
    ]
  },
  {
    title: "Beamforming MISO-OFDM PAPR reduction: A Space-user perspective",
    titleUrl: "http://web.stanford.edu/~kuangxu/papers/XuTJ09.pdf",
    coAuthors: [
      { name: "T. Thomas" },
      { name: "D. L. Jones" }
    ],
    journal: "Technical Report",
    year: "2009",
    links: [
      { label: "paper", url: "http://web.stanford.edu/~kuangxu/papers/XuTJ09.pdf", type: "manuscript" }
    ]
  }
];

export const mediaEntries: MediaEntry[] = [
  {
    title: "Kuang Xu: How to make (and keep) genetic data private?",
    titleUrl: "https://engineering.stanford.edu/magazine/future-everything",
    outlet: "The Future of Everything Podcast, Episode #163"
  },
  {
    title: "New Research Suggests In-Person Voting May Be Less Risky Than Previously Thought",
    titleUrl: "https://www.npr.org/2020/08/21/904739776/new-research-suggests-in-person-voting-may-be-less-risky-than-previously-thought",
    outlet: "National Public Radio (NPR)",
    date: "April 2020"
  },
  {
    title: "How risky is voting in person? Here's how to navigate your options during the pandemic",
    titleUrl: "https://www.pbs.org/newshour/health/how-risky-is-voting-in-person-heres-how-to-navigate-your-options-during-the-pandemic",
    outlet: "Public Broadcasting Service (PBS)",
    date: "2020"
  },
  {
    title: "#GetMePPE: Why fully equipping health care workers against coronavirus keeps us all safer",
    titleUrl: "https://www.nbcnews.com/think/opinion/getmeppe-why-fully-equipping-health-care-workers-against-coronavirus-keeps-ncna1167146",
    outlet: "NBC News",
    date: "March 2020",
    links: [
      { label: "Model details", url: "http://www.columbia.edu/~cc3179/provider.htm", type: "other" }
    ]
  },
  {
    title: "Using the vacant hotel rooms for coronavirus patients would help reduce the time for us to get back to normal",
    titleUrl: "https://www.businessinsider.com/fight-covid19-pandemic-use-hotels-coronavirus-patients-2020-4?fbclid=IwAR2WwMSspRcgTnXNycfBkq0U00eI_gHiqCdwRJlb8SyeFAypG_fIKJG_pCI",
    outlet: "Business Insider",
    date: "April 25, 2020",
    links: [
      { label: "Model details", url: "https://docs.google.com/document/d/1EtzwRVZ58ZHN_VBfdtw-mA4IYdPOZsm73ZIGRjdpbns/edit?usp=sharing", type: "other" }
    ]
  }
];

export const talks: TalkEntry[] = [
  {
    title: "Information-centric thinking in stochastic modeling and decision-making",
    titleUrl: "https://youtu.be/phWR82gMKRg?t=5243",
    event: "ACM SIGMETRICS Rising Star Research Award Lecture",
    year: "2020"
  },
  {
    title: "Privacy sequential learning",
    titleUrl: "https://youtu.be/TICOZ8HbG5k",
    event: "COLT",
    year: "2018"
  },
  {
    title: "On the capacity of information processing system",
    titleUrl: "https://www.youtube.com/watch?v=dUMLi0Xf9Gc",
    event: "COLT",
    year: "2016"
  },
  {
    title: "On the power of (even a little) resource pooling",
    titleUrl: "https://vod.video.cornell.edu/media/ORIE+Colloquium+-+Kuang+Xu+(MIT)A+On+the+Power+of+(even+a+little)+Resource+Pooling+and+Flexibility/1_dzuj75fh#t=3:00",
    event: "Cornell ORIE Colloquium",
    year: "2013"
  }
];
