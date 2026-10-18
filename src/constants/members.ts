export interface ClubMember {
  id: string;
  name: string;
  degree: string;
  year: 1 | 2 | 3 | 4;
  department: string;
  linkedin: string | null;
  image: string | null; // File name located inside public/team/ (e.g., "aditya_sharma.jpg")
  position: string | null;
}

export const CLUB_MEMBERS: ClubMember[] = [
  // ==========================================
  // FINAL YEAR (4th Year / Batch of 2026)
  // ==========================================
  {
    id: "4-1",
    name: "Aditya Sharma",
    degree: "B.Tech",
    year: 4,
    department: "Computer Science & Engineering",
    linkedin: "https://www.linkedin.com/in/",
    image: "aditya_sharma.jpg",
    position: "General Secretary",
  },
  {
    id: "4-2",
    name: "Pooja Reddy",
    degree: "B.Tech",
    year: 4,
    department: "Electronics & Communication Engineering",
    linkedin: "https://www.linkedin.com/in/",
    image: "pooja_reddy.jpg",
    position: null,
  },
  {
    id: "4-3",
    name: "Rohan Verma",
    degree: "B.Tech",
    year: 4,
    department: "Mechanical Engineering",
    linkedin: "https://www.linkedin.com/in/",
    image: "rohan_verma.jpg",
    position: null,
  },
  {
    id: "4-4",
    name: "Sneha Patel",
    degree: "B.Tech",
    year: 4,
    department: "Chemical Engineering",
    linkedin: "https://www.linkedin.com/in/",
    image: null,
    position: null,
  },

  // ==========================================
  // PRE-FINAL YEAR (3rd Year / Batch of 2027)
  // ==========================================
  {
    id: "3-1",
    name: "Karthik Iyer",
    degree: "B.Tech",
    year: 3,
    department: "Electrical & Electronics Engineering",
    linkedin: "https://www.linkedin.com/in/",
    image: "karthik_iyer.jpg",
    position: null,
  },
  {
    id: "3-2",
    name: "Ananya Deshmukh",
    degree: "B.Tech",
    year: 3,
    department: "Computer Science & Engineering",
    linkedin: "https://www.linkedin.com/in/",
    image: "ananya_deshmukh.jpg",
    position: null,
  },
  {
    id: "3-3",
    name: "Vikram Malhotra",
    degree: "B.Tech",
    year: 3,
    department: "Civil Engineering",
    linkedin: null,
    image: "vikram_malhotra.jpg",
    position: null,
  },
  {
    id: "3-4",
    name: "Meera Nair",
    degree: "B.Tech",
    year: 3,
    department: "Metallurgical & Materials Engineering",
    linkedin: "https://www.linkedin.com/in/",
    image: "meera_nair.jpg",
    position: null,
  },
  {
    id: "3-5",
    name: "Nikhil Joshi",
    degree: "B.Tech",
    year: 3,
    department: "Biotechnology",
    linkedin: "https://www.linkedin.com/in/",
    image: null,
    position: null,
  },

  // ==========================================
  // SOPHOMORES (2nd Year / Batch of 2028)
  // ==========================================
  {
    id: "2-1",
    name: "Aman Gupta",
    degree: "B.Tech",
    year: 2,
    department: "Electronics & Communication Engineering",
    linkedin: "https://www.linkedin.com/in/",
    image: "aman_gupta.jpg",
    position: null,
  },
  {
    id: "2-2",
    name: "Rhea Sen",
    degree: "B.Tech",
    year: 2,
    department: "Biotechnology",
    linkedin: "https://www.linkedin.com/in/",
    image: "rhea_sen.jpg",
    position: null,
  },
  {
    id: "2-3",
    name: "Harsh Vardhan",
    degree: "B.Tech",
    year: 2,
    department: "Mechanical Engineering",
    linkedin: "https://www.linkedin.com/in/",
    image: null,
    position: null,
  },
  {
    id: "2-4",
    name: "Divya Kulkarni",
    degree: "B.Tech",
    year: 2,
    department: "Computer Science & Engineering",
    linkedin: "https://www.linkedin.com/in/",
    image: "divya_kulkarni.jpg",
    position: null,
  },
  {
    id: "2-5",
    name: "Pranav Pillai",
    degree: "B.Tech",
    year: 2,
    department: "Chemical Engineering",
    linkedin: null,
    image: "pranav_pillai.jpg",
    position: null,
  },

  // ==========================================
  // FRESHMEN (1st Year / Batch of 2029)
  // ==========================================
  {
    id: "1-1",
    name: "Siddharth Rao",
    degree: "B.Tech",
    year: 1,
    department: "Computer Science & Engineering",
    linkedin: "https://www.linkedin.com/in/",
    image: "siddharth_rao.jpg",
    position: null,
  },
  {
    id: "1-2",
    name: "Tanvi Saxena",
    degree: "B.Tech",
    year: 1,
    department: "Electronics & Communication Engineering",
    linkedin: "https://www.linkedin.com/in/",
    image: null,
    position: null,
  },
  {
    id: "1-3",
    name: "Arjun Mehta",
    degree: "B.Tech",
    year: 1,
    department: "Electrical & Electronics Engineering",
    linkedin: "https://www.linkedin.com/in/",
    image: "arjun_mehta.jpg",
    position: null,
  },
  {
    id: "1-4",
    name: "Ishita Chawla",
    degree: "B.Tech",
    year: 1,
    department: "Civil Engineering",
    linkedin: "https://www.linkedin.com/in/",
    image: "ishita_chawla.jpg",
    position: null,
  },
];

export const getTeamByYear = (year: 1 | 2 | 3 | 4) =>
  CLUB_MEMBERS.filter((member) => member.year === year);