import CEO1Img from '../assets/CEO1.jpeg';
import CEO2Img from '../assets/CEO2.jpeg';
import CEO3Img from '../assets/CEO3.jpeg';
import CEO4Img from '../assets/CEO4.jpeg';
import CEO5Img from '../assets/CEO5.jpeg';
import CEO6Img from '../assets/CEO6.jpeg';
import CEO7Img from '../assets/CEO7.jpeg';
import CEO8Img from '../assets/CEO8.jpeg';
import CEO9Img from '../assets/CEO9.jpeg';
import CEO10Img from '../assets/CEO10.jpeg';
import CEO11Img from '../assets/CEO11.jpeg';
import CEO12Img from '../assets/CEO12.jpeg';

export interface MemberPoint {
  icon: string;
  title: string;
  description: string;
}

export interface Member {
  id: number;
  image: string;
  name: string;
  role: string;
  quote: string;
  bio: string;
  points: MemberPoint[];
  tag: string;
}

const typeAPoints: MemberPoint[] = [
  { icon: 'visibility', title: 'Visionary Leadership', description: 'Dedicated to building a society free from poverty and discrimination, focusing on long-term transformation rather than temporary relief.' },
  { icon: 'handshake', title: 'Commitment to the Vulnerable', description: 'Working tirelessly for orphaned children, widows, sanitation workers, and marginalized families to restore their confidence and dignity.' }
];

const typeBPoints: MemberPoint[] = [
  { icon: 'group', title: 'Community Building', description: 'Fostering strong relationships within the community to build a network of support and empowerment for the marginalized.' },
  { icon: 'insights', title: 'Strategic Growth', description: 'Guiding the trust\'s expansion and optimizing resources to maximize impact across all ongoing projects.' }
];

const solankiPoints: MemberPoint[] = [
  { icon: 'gavel', title: 'Social Service and Justice', description: 'Remarkable contributions toward the peaceful resolution of social and family disputes through community-based mediation and the Panch Committee system.' },
  { icon: 'volunteer_activism', title: 'Spiritual and Social Activities', description: 'Deeply devoted to spiritual values, religious gatherings, de-addiction initiatives, and promoting social awareness among younger generations.' },
  { icon: 'assignment', title: 'Contributions to the Trust', description: 'Supervises day-to-day activities, mobilizes financial support from donors, coordinates public events, and provides strategic organizational guidance.' }
];

const chauhanPoints: MemberPoint[] = [
  { icon: 'badge', title: 'Professional Service', description: 'Served with honesty, transparency, and a strong sense of public welfare as a Talati-cum-Mantri in Isri and Meghraj for more than 30 years.' },
  { icon: 'self_improvement', title: 'Spiritual Life & Hobbies', description: 'Devoted follower of Jainism practicing non-violence and compassion. Passionate about professional painting, cricket, and sports.' },
  { icon: 'groups', title: 'Community Leadership', description: 'An active leader of the Valmiki community in Meghraj Taluka, dedicated to social service, moral values, and community development.' }
];

const chimanPoints: MemberPoint[] = [
  { icon: 'school', title: 'Educational Contribution', description: 'Completed P.T.C. and served as a dedicated primary school teacher for 38 years, instilling academic knowledge and moral values.' },
  { icon: 'explore', title: 'Professional Locations', description: 'Mainly served in Shamlaji, Modasa, and Jamnagar, dedicating his career to shaping thousands of exemplary citizens.' },
  { icon: 'theater_comedy', title: 'Cultural & Religious Activities', description: 'Actively engaged in cultural, religious, and social awareness programs to foster community togetherness.' }
];

const govindPoints: MemberPoint[] = [
  { icon: 'history_edu', title: 'Creative Expression', description: 'Widely recognized as a talented writer, thoughtful poet, and profound philosopher whose writings inspire humanity, compassion, and resilience.' },
  { icon: 'volunteer_activism', title: 'Selfless Service', description: 'Devoted to social service, treating every individual with equal respect and dignity across both rural and urban communities.' },
  { icon: 'psychology', title: 'Visionary Philosophy', description: 'Believes that true identity is defined by achievements and contributions, inspiring younger generations to seek meaningful action.' }
];

const jayeshPoints: MemberPoint[] = [
  { icon: 'school', title: 'Educational Support', description: 'A graduate in Rural Development serving as a Senior Head Clerk, supporting underprivileged students with school fees, books, and study materials.' },
  { icon: 'payments', title: 'Trust Financial Care', description: 'Treasurer of the Trust carrying out his responsibilities with sincerity, transparency, and personal resource contributions during financial challenges.' },
  { icon: 'volunteer_activism', title: 'Philanthropic Personality', description: 'Known for simplicity, honesty, and compassion, dedicating personal vehicles and resources to support mass marriages and social welfare.' }
];

const bharatPoints: MemberPoint[] = [
  { icon: 'groups', title: 'Social Leadership', description: 'Served as the Panch Patel of the Ada-Aatham region, resolving community issues with fairness, wisdom, and impartiality.' },
  { icon: 'handshake', title: 'Government Welfare Link', description: 'Facilitated government assistance (₹24,000) under Kunwarbai Nu Mameru Yojana and Ramabai Saat Phera Yojana for mass marriage brides.' },
  { icon: 'insights', title: 'Organizational Focus', description: 'Mentors younger generations, coordinates community events, and builds strong trust between the Trust and the community.' }
];

const lalluPoints: MemberPoint[] = [
  { icon: 'grass', title: 'Social Dedication', description: 'Devoted to social service and community welfare, working actively alongside his agricultural occupation.' },
  { icon: 'savings', title: 'Fundraising Excellence', description: 'Possesses exceptional skills in building donor relationships and coordinating fundraising for charitable projects.' },
  { icon: 'self_improvement', title: 'Spiritual Principles', description: 'Guided by humanity, service, humility, and righteousness to strengthen unity and cooperation.' }
];

const vinayPoints: MemberPoint[] = [
  { icon: 'history', title: 'Legacy of Service', description: 'Inherited a noble legacy of community leadership from his late father, Shri Gordhanbhai Rathod, and continues to drive public welfare.' },
  { icon: 'business', title: 'Professional & Education', description: 'Completed his B.A. degree and currently serves professionally with the Life Insurance Corporation of India (LIC) in Modasa.' },
  { icon: 'campaign', title: 'Community Impact', description: 'Recognized for hard work, strong organizational skills, and public speaking, leading key youth and community development programs.' }
];

const sanjayPoints: MemberPoint[] = [
  { icon: 'school', title: 'Academic Credentials', description: 'Highly educated with M.A. (Economics), M.Ed., and B.Ed. degrees, dedicating his expertise to community educational development.' },
  { icon: 'music_note', title: 'Creative & Literary', description: 'A talented singer, public speaker, and writer who uses music and literature to spread values and inspire youth.' },
  { icon: 'analytics', title: 'Financial Audit', description: 'Serves as the Auditor of the Trust, playing an important role in promoting transparency, accountability, and efficient governance.' }
];

const nehalPoints: MemberPoint[] = [
  { icon: 'pets', title: 'Animal Welfare', description: 'Veterinary Officer in Aravalli, treating the protection and treatment of voiceless animals as a moral and spiritual mission.' },
  { icon: 'school', title: 'Education & Devotion', description: 'Nurtured by values of education and discipline, actively supporting mass marriages and poor children\'s education.' },
  { icon: 'campaign', title: 'Youth Leadership', description: 'An energetic leader promoting cleanliness, scientific thinking, and social upliftment within the community.' }
];

export const managementMembers: Member[] = [
  {
    id: 1,
    image: CEO1Img,
    name: 'Shri Narayanbhai M. Rathod',
    role: 'Founder, Coordinator & President',
    quote: '"Every human life deserves dignity, hope, opportunity, and a future."',
    bio: 'Driven by deep compassion and a profound understanding of the struggles faced by the underprivileged, Shri Narayanbhai M. Rathod established the Valmiki Samaj Charitable Trust on January 24, 2020.',
    points: typeAPoints,
    tag: 'Registered Trust: F/1968/Aravalli'
  },
  {
    id: 2,
    image: CEO2Img,
    name: 'Dr. Bhikhabhai K. Solanki',
    role: 'Honorary Secretary',
    quote: '"Together, we can create a world where every individual thrives and contributes to a brighter future."',
    bio: 'A highly dedicated professional committed to the core values of the Valmiki Samaj Charitable Trust, driving strategic initiatives and ensuring the efficient execution of all community programs.',
    points: typeBPoints,
    tag: 'Core Management Team'
  },
  {
    id: 3,
    image: CEO3Img,
    name: 'Mr. Poonambhai Lalabhai Solanki',
    role: 'Chairman',
    quote: '"True justice is the foundation of peace, unity, and harmony in society."',
    bio: 'Mr. Poonambhai Lalabhai Solanki is a respected community leader, social reformer, and a source of inspiration for society. He has been serving as the Mahant of the Malpur–Aniyor region and has dedicated his life to promoting unity, justice, and social harmony within the community.\n\nKnown for his wisdom, fairness, and commitment to social welfare, he has played a significant role in resolving community disputes through the traditional Panch system. His impartial and just decisions have helped maintain peace, mutual understanding, and strong social bonds among community members.\n\n• Date of Birth: 01 June 1952\n• Residence: Malpur Village & Post, Taluka Malpur, District Aravalli, Gujarat, India\n• Educational Qualification: Secondary School (10th Pass)\n• Profession: Retired Government Employee\n• Social Responsibility: Community Leader of the Malpur–Aniyor Region',
    points: solankiPoints,
    tag: 'Core Management Team'
  },
  {
    id: 4,
    image: CEO4Img,
    name: 'Mr. Dineshbhai Bhurabhai Chauhan',
    role: 'Vice Chairman',
    quote: '"Together, we can create a world where every individual thrives and contributes to a brighter future."',
    bio: 'Mr. Dineshbhai Bhurabhai Chauhan is a religious, service-oriented, and multi-talented personality. As an active leader of the Valmiki community in Meghraj Taluka, he has dedicated his life to social service, moral values, and spiritual growth.\n\nHe served with honesty, transparency, and a strong sense of public welfare as a Talati-cum-Mantri in Isri and Meghraj for more than 30 years. Even after retirement, he continues to actively contribute to community development as the Vice Chairman of Valmiki Samaj Charitable Trust.\n\n• Date of Birth: 01 June 1964\n• Address: Village & Post Meghraj, District Aravalli, Gujarat\n• Occupation: Talati-cum-Mantri, Isri & Meghraj (Retired Government Officer)\n• Hobbies: Professional Painting, Cricket, and various sports',
    points: chauhanPoints,
    tag: 'Core Management Team'
  },
  {
    id: 5,
    image: CEO5Img,
    name: 'Mr. Chimanbhai Somabhai Solanki',
    role: 'Vice President',
    quote: '"Every human life deserves dignity, hope, opportunity, and a future."',
    bio: 'Mr. Chimanbhai Somabhai Solanki is a respected, educated, and socially devoted leader. He has dedicated his life to personal growth and the overall development of society. Through his hard work, dedication, and commitment, he has played a significant role in shaping thousands of students into responsible and exemplary citizens of the nation.\n\nHe completed his P.T.C. and served as a primary school teacher for 38 years. He mainly served in Shamlaji, Modasa, and Jamnagar. As an educator, he not only imparted academic knowledge but also instilled moral values, cultural awareness, and social responsibility among his students. Even after retirement, he continues to remain actively involved in social service.\n\n• Age: 62 years\n• Native Place: Sayra, Taluka Modasa\n• Current Residence: Sarvodaya Nagar, Modasa',
    points: chimanPoints,
    tag: 'Core Management Team'
  },
  {
    id: 6,
    image: CEO6Img,
    name: 'Mr. Govindbhai Alkhabhai Solanki',
    role: 'Personality and Life Philosophy',
    quote: '"What truly defines us is not where or how we were born, but what we accomplish and contribute throughout our lives."',
    bio: 'Mr. Govindbhai Alkhabhai Solanki’s life is a remarkable blend of perseverance, courage, creativity, and selfless service to society. Born into humble circumstances, he rose above numerous challenges through unwavering determination, relentless hard work, and a positive outlook on life.\n\nHe firmly believes that a person\'s true identity is defined not by their birthplace or circumstances, but by their achievements, values, and contributions to society. Beyond his dedication to social service, Govindbhai is widely recognized as a talented writer, a thoughtful poet, and a profound philosopher. His writings go beyond words; they inspire humanity, compassion, resilience, and a deeper understanding of life’s values. Through his essays, reflections, and poetry, he ignites hope, confidence, and social awareness in the hearts of his readers.',
    points: govindPoints,
    tag: 'Core Management Team'
  },
  {
    id: 7,
    image: CEO7Img,
    name: 'Shri Jayeshbhai Nathabhai Rathod',
    role: 'Treasurer',
    quote: '"True wealth is not measured by material possessions, but by the ability to bring hope, support, and happiness into the lives of others."',
    bio: 'Shri Jayeshbhai Nathabhai Rathod is a graduate in Rural Development and currently serves as a Senior Head Clerk at Shri N. U. Bihola High School, Isari. His dedication to educational administration, discipline, and responsibility has earned him a reputation as a dependable and highly efficient professional.\n\nHis passion for education extends beyond his professional role. He has become a beacon of hope for underprivileged, orphaned, and economically disadvantaged students by supporting their educational needs. Through assistance with school fees, books, uniforms, study materials, and coaching facilities, he has played a significant role in shaping brighter futures for many young learners.\n\n• Age: 53 Years\n• Native Place: Isari, Meghraj Taluka, Aravalli District\n• Current Residence: Pokhraj Park Society, Modasa, Aravalli',
    points: jayeshPoints,
    tag: 'Core Management Team'
  },
  {
    id: 8,
    image: CEO8Img,
    name: 'Shri Bharatbhai M. Rathod',
    role: 'Organizational Secretary',
    quote: '"Service to Humanity is Service to God."',
    bio: 'Shri Bharatbhai M. Rathod is a dedicated and respected social worker actively involved in community service, organizational development, devotional activities, and sports. Fearless and enthusiastic, he consistently takes the initiative in community development activities.\n\nAs the Panch Patel of the Ada-Aatham region, he has resolved numerous social issues with fairness. As the Organizational Secretary of the Trust, he played a leading role in securing government welfare benefits of ₹24,000 for orphaned brides under Kunwarbai Nu Mameru Yojana and Ramabai Saat Phera Yojana.\n\n• Age: 63 Years\n• Residence: Tintoi, Taluka Modasa, District Aravalli, Gujarat, India',
    points: bharatPoints,
    tag: 'Core Management Team'
  },
  {
    id: 9,
    image: CEO9Img,
    name: 'Mr. Lallubhai Chandubhai Solanki',
    role: 'Vice Secretary',
    quote: '"True service is the greatest wealth."',
    bio: 'Mr. Lallubhai Chandubhai Solanki is a simple, service-oriented, and spiritually enriched personality who has dedicated himself to the welfare and overall development of society. Along with agriculture, he actively participates in various social service activities and continuously works for the betterment of the community.\n\nAs a loyal and dedicated Vice Secretary of Valmiki Samaj Charitable Trust, he plays a significant role in the Trust’s various initiatives and activities. His gentle speech, courteous nature, and warm relationships with people have earned him great respect and popularity within the community.\n\n• Date of Birth: 02 May 1966\n• Occupation: Agriculture and Social Service\n• Position: Vice Secretary – Valmiki Samaj Charitable Trust',
    points: lalluPoints,
    tag: 'Core Management Team'
  },
  {
    id: 10,
    image: CEO10Img,
    name: 'Mr. Vinaykumar Gordhanbhai Rathod',
    role: 'Joint Secretary',
    quote: '"Through continued service and dedication, we carry forward the noble legacy of our predecessors for the betterment of society."',
    bio: 'Mr. Vinaykumar Gordhanbhai Rathod was born on July 11, 1979, into a family deeply rooted in social service, community leadership, and public welfare. He completed his Bachelor of Arts (B.A.) degree and is currently serving with the Life Insurance Corporation of India (LIC), Modasa.\n\nHe inherited values of dedication and leadership from his father, Late Shri Gordhanbhai Rathod (known as "Mastana"), a highly respected social leader, politician, scholar, and Chief Patron. Following his demise, Mr. Vinaykumar Rathod assumed his father\'s responsibilities within the Valmiki Samaj Charitable Trust, carrying forward this noble legacy with dedication and sincerity.',
    points: vinayPoints,
    tag: 'Core Management Team'
  },
  {
    id: 11,
    image: CEO11Img,
    name: 'Mr. Sanjaykumar Jagdishbhai Solanki',
    role: 'Auditor',
    quote: '"Transparency, accountability, and dedication are the keys to building a trusted and progressive society."',
    bio: 'Mr. Sanjaykumar Jagdishbhai Solanki is an energetic, progressive, and multi-talented young social worker. He has made significant contributions in the fields of education, social service, literature, and cultural activities. He actively works to spread awareness, promote education, and strengthen social unity.\n\nAs the Auditor of Valmiki Samaj Charitable Trust, he plays an important role in strengthening the Trust by promoting transparency, accountability, and an efficient system of governance. He is also a talented singer, a skilled public speaker, and a literary writer.\n\n• Date of Birth: 03 May 1986\n• Qualifications: M.A. (Economics), M.Ed., B.Ed.\n• Position: Auditor – Valmiki Samaj Charitable Trust',
    points: sanjayPoints,
    tag: 'Core Management Team'
  },
  {
    id: 12,
    image: CEO12Img,
    name: 'Dr. Nehal Kumar Narayanlal Rathod',
    role: 'Veterinary Officer & Youth Leader',
    quote: '"Cleanliness leads to education, and education leads to development."',
    bio: 'Dr. Nehal Kumar Rathod is a veterinary doctor by profession and a true humanitarian by heart. Serving as a Veterinary Officer in Aravalli District, he considers the protection and treatment of animals not merely a professional responsibility but a moral and spiritual mission.\n\nHe is the son of Mr. Narayanlal Rathod (Civil Engineer and President of the Trust) and a retired teacher who nurtured in him the values of education, discipline, and compassion. In 2025, he joined the Valmiki Samaj Charitable Trust as a dynamic and energetic young member, contributing significantly to mass marriages and youth development.\n\n• Date of Birth: 25 June 1991\n• Qualifications: B.V.Sc. & A.H. (Veterinary Doctor)\n• Position: Veterinary Officer & Youth Leader',
    points: nehalPoints,
    tag: 'Core Management Team'
  }
];
