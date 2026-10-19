export interface ClubMember {
  id: string;
  name: string;
  degree: string;
  year: 1 | 2 | 3 | 4;
  department: string;
  linkedin: string | null;
  image: string | null; // Path located inside public/team/ (e.g., "himavi_n.jpg")
  position: string | null;
}

export const CLUB_MEMBERS: ClubMember[] = [
  // ==========================================
  // 3RD YEAR (Batch of 2027)
  // ==========================================
  {
    id: "3-himavi-n",
    name: "Himavi N",
    degree: "B.Tech",
    year: 3,
    department: "Mechanical Engineering",
    linkedin: "https://www.linkedin.com/in/himavi-noope-b66362366/",
    image: "himavi_n.jpg",
    position: null,
  },
  {
    id: "3-devansh-kabra",
    name: "Devansh Kabra",
    degree: "B.Tech",
    year: 3,
    department: "Electronics and Communication Engineering",
    linkedin: "https://www.linkedin.com/in/devansh-kabra",
    image: "devansh_kabra.jpg",
    position: null,
  },
  {
    id: "3-pranav-umbarkar",
    name: "Pranav Umbarkar",
    degree: "B.Tech",
    year: 3,
    department: "Computer Science & Engineering",
    linkedin: "https://www.linkedin.com/in/pranavumbarkar",
    image: "pranav_umbarkar.jpeg",
    position: null,
  },
  {
    id: "3-arushi-pundir",
    name: "Arushi Pundir",
    degree: "B.Tech",
    year: 3,
    department: "Electronics and Communication Engineering",
    linkedin: "https://www.linkedin.com/in/arushi-pundir-b86825335",
    image: "arushi_pundir.jpeg",
    position: null,
  },
  {
    id: "3-khush-satyaprakash-jaisinghani",
    name: "Khush Satyaprakash Jaisinghani",
    degree: "B.Tech",
    year: 3,
    department: "Electronics and Communication Engineering (VLSI)",
    linkedin: "https://www.linkedin.com/in/khush-satyaprakash-jaisinghani-60b13a260",
    image: "khush_satyaprakash_jaisinghani.jpg",
    position: null,
  },
  {
    id: "3-tushar-jain",
    name: "Tushar Jain",
    degree: "B.Tech",
    year: 3,
    department: "Computer Science & Engineering",
    linkedin: "https://www.linkedin.com/in/tushar-jain-487528335",
    image: "tushar_jain.jpeg",
    position: null,
  },
  {
    id: "3-tanuj-kulkarni",
    name: "Tanuj Kulkarni",
    degree: "B.Tech",
    year: 3,
    department: "Computer Science & Engineering",
    linkedin: "https://www.linkedin.com/in/tanuj-kulkarni-423406331",
    image: "tanuj_kulkarni.jpeg",
    position: null,
  },

  // ==========================================
  // 2ND YEAR (Batch of 2028)
  // ==========================================
  {
    id: "2-shreyash-sanjay-baviskar",
    name: "Shreyash Sanjay Baviskar",
    degree: "B.Tech",
    year: 2,
    department: "Civil Engineering",
    linkedin: "https://www.linkedin.com/in/shreyash-baviskar-07593b368",
    image: "shreyash_sanjay_baviskar.jpg",
    position: null,
  },
  {
    id: "2-jagannatha-sharma",
    name: "Jagannatha Sharma",
    degree: "B.Tech",
    year: 2,
    department: "Metallurgical and Materials Engineering",
    linkedin: "https://www.linkedin.com/in/jagannatha-somayajula-71b455391",
    image: null,
    position: null,
  },
  {
    id: "2-himanshu-bhoot",
    name: "Himanshu Bhoot",
    degree: "B.Tech",
    year: 2,
    department: "Biotechnology",
    linkedin: "https://www.linkedin.com/in/himanshubhoot",
    image: "himanshu_bhoot.png",
    position: null,
  },
  {
    id: "2-anurag-sharma",
    name: "Anurag Sharma",
    degree: "B.Tech",
    year: 2,
    department: "Chemical Engineering",
    linkedin: "https://www.linkedin.com/in/anurag-sharma-3642ab382",
    image: "anurag_sharma.jpg",
    position: null,
  },
  {
    id: "2-aravind-vardhan",
    name: "Aravind Vardhan",
    degree: "B.Tech",
    year: 2,
    department: "Metallurgical and Materials Engineering",
    linkedin: "https://www.linkedin.com/in/aravind-vardhan-5129b1420",
    image: null,
    position: null,
  },
  {
    id: "2-p-srividya",
    name: "P. Srividya",
    degree: "B.Tech",
    year: 2,
    department: "Metallurgical and Materials Engineering",
    linkedin: "https://www.linkedin.com/in/sri-vidya-235b0b397",
    image: "p_srividya.jpg",
    position: null,
  },
  {
    id: "2-sneha-sarkar",
    name: "Sneha Sarkar",
    degree: "B.Tech",
    year: 2,
    department: "Electrical and Electronics Engineering",
    linkedin: null,
    image: "sneha_sarkar.jpg",
    position: null,
  },

  // ==========================================
  // 1ST YEAR (Batch of 2029)
  // ==========================================
  {
    id: "1-haresh-arora",
    name: "Haresh Arora",
    degree: "B.Tech",
    year: 1,
    department: "Computer Science & Engineering",
    linkedin: "https://www.linkedin.com/in/haresh-arora-749149420",
    image: "haresh_arora.jpg",
    position: null,
  },
  {
    id: "1-soham-nilkanth",
    name: "Soham Nilkanth",
    degree: "B.Tech",
    year: 1,
    department: "Electronics and Communication Engineering",
    linkedin: "https://www.linkedin.com/in/soham-nilkanth-374b64431",
    image: "soham_nilkanth.jpg",
    position: null,
  },
];