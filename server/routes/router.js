const express = require('express')
const router = express.Router()

router.get("/api", (req, res) => {
    res.json(
        {
            "pFundamentals": ["w3schools", "freeCodeCamp", "codeacademy", "neetCode", "coursera", "geeksforgeeks", "harvardCS50"],
            "dSA": ["neetCode", "coursera", "geeksforgeeks"],
            "note": ["personalNote", "onlineNote"]
        }
    )
})

router.get("/block-data", (req, res) => {
    res.json(
        {
            "w3schools": {"name": "W3schools", "link": "w3schools.com", "description": "This website could be used to learn different languages like Python, Java, etc."},
            "freeCodeCamp": {"name": "FreeCodeCamp", "link": "freecodecamp.org", "description": "It includes interactive coding challenges, projects, and certifications in various technology stacks, including HTML, CSS, JavaScript, Data Visualization, APIs and Microservices, and more. The platform is known for its hands-on approach to learning and its supportive community."},
            "codeacademy": {"name": "Codeacademy", "link": "codeacademy.com", "description": "This website provides a hands-on coding experience with exercises and projects. Codecademys courses cover topics like web development, data science, programming languages (Python, JavaScript, Ruby, etc.), and more. While some content is free, a premium subscription is available for additional features and content."},
            "neetCode": {"name": "NeetCode", "link": "neetcode.io", "description": "Neetcode is a platform that helps you prepare for technical interviews. It provides a collection of questions and answers that are asked in technical interviews at top tech companies!"},
            "coursera": {"name": "Coursera", "link": "coursera.org", "description": "Coursera is an online learning platform that offers courses, certificates, and degrees from 200+ leading universities and companies. The platform offers courses in a wide range of subjects, including business, computer science, data science, math, science, and more. You can earn certificates and show it off on your resume!"},
            "geeksforgeeks": {"name": "Geeks for Geeks", "link": "geeksforgeeks.org/data-structures/?ref=shm_outind", "description": "GeeksforGeeks is a computer science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions. The website covers a wide range of programming languages and computer science concepts, making it a valuable resource for both beginners and experienced programmers. It is particularly popular for its competitive programming and data structure/algorithms content."},
            "harvardCS50": {"name": "HarvardCS50", "link":"harvard.edu/search/?q_as=CS50", "description": "HarvardCS50 is a free online course that teaches you the basics of computer science. It is a great resource for beginners to learn the fundamentals of computer science and programming."},
            "personalNote": {"name": "Personal Notes", "link": "", "description": ""},
            "onlineNote": {"name": "Online Notes", "link": "", "description": ""}
        }
    )
})

router.get("/faqs", (req, res) => {
    res.json(
        [
            {"id": "1", "question": "What is an internship?", "answer": "An internship is a temporary position with an emphasis on on-the-job training rather than merely employment, and it can be paid or unpaid. Internships are usually completed by students who want to gain relevant skills and experience in a particular field. Internships are a great way to get your foot in the door and gain valuable experience in your desired field."},
            {"id": "2", "question": "What is the difference between an internship and a job?", "answer": "An internship is a temporary position with an emphasis on on-the-job training rather than merely employment, and it can be paid or unpaid. Internships are usually completed by students who want to gain relevant skills and experience in a particular field. Internships are a great way to get your foot in the door and gain valuable experience in your desired field. A job is a paid position of regular employment. It is usually long-term and requires a certain level of experience and qualifications. A job is a great way to gain experience in your desired field and earn money."},
            {"id": "3", "question": "What are the benfits of an internship?", "answer": "Internships are a great way to gain experience in your desired field and get your foot in the door. They can help you build your resume and develop your skills. Internships are also a great way to network and make connections with people in your field."},
            {"id": "4", "question": "How do I find an internship?", "answer": "There are many ways to find an internship. You can search online for internships in your desired field, attend career fairs, and network with people in your field. You can also reach out to companies directly and ask if they have any internship opportunities available. Most importantly you can utilize this site to prepare for an internship and interview!"},
            {"id": "5", "question": "What should I do to prepare for an internship", "answer": "Before you start your internship, you should research the company and learn about their culture. You should also make sure you have the necessary skills and qualifications for the internship."},
            {"id": "6", "question": "What should I do during my internship?", "answer": "During your internship, you should work hard and learn as much as you can. You should also network with people in your field and make connections. Make sure to ask questions and take initiative! You should also keep track of your accomplishments and update your resume."},
            {"id": "7", "question": "What should I do after my internship?", "answer": "After your internship, you should update your resume and add your internship experience. You should also ask for a letter of recommendation from your supervisor. Make sure to stay in touch with the people you met during your internship! They can be a great resource for future job opportunities."}
        ]
    )
})

router.get("/stories", (req, res) => {
    res.json(
        [
            {"id": "1", "company": "Uber", "story": "Tella story?"},
            {"id": "2", "company": "Zillow", "story": "Simon story?"},
            {"id": "3", "company": "Almada", "story": "My summer internship at Almada was a transformative experience that immersed me in the technology sector. I handled customer inquiries, troubleshooting BIOS issues, and learned the value of diverse skills. Collaborating with interns, we presented on technical topics and explored AIs potential in cybersecurity. The internship broadened my web development skills and introduced me to AIs impact on network security and database organization. The supportive work environment, camaraderie, and teamwork were invaluable, emphasizing the importance of collaboration. The highlight was working on an AI system for database organization and network security. This experience enhanced my problem-solving, communication, and innovation skills, leaving me inspired for future endeavors in technology."}
        ]
    )
})

module.exports = router