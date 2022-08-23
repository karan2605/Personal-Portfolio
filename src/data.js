export const projects = [
    {
      title: "MedBlock - A Patient Medical Record System using the Ethereum Blockchain",
      subtitle: "Blockchain Development",
      description:
        "Existing data management systems to access patient medical data contain inconsistencies and numerous security issues that put patients’ sensitive data at risk. The aim of the project was to design, develop and test a medical record system using the Ethereum blockchain to eliminate the aforementioned issues. Blockchain networks ensure stricter consistency and security of data stored on it, however these networks struggle to scale effectively leading to very expensive monetary costs to add data onto the network. This project also proposes a solution to tackle scalability using off-chain storage given the volume of data and frequency of transactions that occur on the blockchain network in the form of frequently adding and updating patient data by thousands of users concurrently. The proposed system managed to reduce transaction costs by approximately seven times on average.",
      key: "medblock"
    },
    {
      title: "Data Analytics with Hadoop MapReduce & Apache Hive",
      subtitle: "Big Data Analytics",
      description: "A group project involving the design, development, and testing of a set of analytical queries using both Hadoop MapReduce and Apache Hive, The purpose of using two frameworks to implement each query is to compare the usability, efficiency, and scalability of each approach. After comparison, the advantages and disadvantages of each approach are discussed. Additionally, Exploratory Data Analysis (EDA) is demonstrated through analysis of the distribution and structure of the dataset provided. This is used to optimise the performance of the Hadoop MapReduce queries.",
      key: "hadoop"
    },
    {
      title: "Gaussian Mixture Modelling (GMM) for Clustering",
      subtitle: "Machine Learning",
      description: "Implementing, testing and analysing a clustering approach based on Gaussian Mixture Modelling (GMM) and the Expectation-Maximisation (E-M) algorithm. The E-M algorithm is used to tune the multivariate Gaussian distribution values until the distributions converge. Finally, K-Means clustering was used to provide the initial mean values for the E-M algorithm as well as visualising and discussing the accuracy of this clustering model compared to GMM.",
      key: "gmm"
    },
    {
      title: "Mini-C Compiler",
      subtitle: "Compiler Design",
      description: "Designing and writing a compiler written in LLVM using C++ for a subset of the C programming language. Involved implementing the language parser, abstract syntax tree and LLVM IR codegen. Compiler also conducts error reporting.",
      key: "llvm"
    },
    {
      title: "Visualising the Spread of a Virus",
      subtitle: "Visualisations",
      description: "Using the Java Processing environment, I implemented a model that displays the spread of a virus through person-to-person contact. Dots on the GUI window signify a person with multiple dots on the window indicating a population. Dots that move are more likely to catch and transmit the virus to other individuals (dots) eventually infecting the entire population. This visualisation is an example of Cellular Automata (CA) consisting of a large number of simple objects that operate in parallel and change state. ",
      key: "virus"
    },
    {
      title: "Motor Controlled Line Following Buggy",
      subtitle: "Computer Organization and Architecture",
      description: "Group Software Project involving the design, development and testing of control software for a motorised buggy to follow a dark line circuit. The software was developed in the C programming language which allowed us to control all registers, actuators and sensors on the buggy. Furthermore, I developed my software engineering skills using waterfall development methodologies.",
      key: "buggy"
    },
    {
      title: "Live Event Feedback System",
      subtitle: "Full Stack Development & Software Engineering",
      description: "Group software engineering project in partnership with Deutsche Bank. Traditionally, event hosts gained feedback at the end of events preventing them from improving their current even session, the prototype developed by our team alleviates this issue by allowing event hosts to gain live feedback and analytics from event attendees. The prototype was developed as a full stack website to ensure it is easily accessible by all. Event hosts can create forms to distribute to event attendees to complete throughout the event. The website also included sentiment analysis algorithms to then analyse and evaluate the general 'mood' of the attendees from their feedback. The host was provided a dashboard to effectively summarise the analytics data.",
      key: "liveEvent"
    },
  ];

export const skills = ["Python", "Java", "JavaScript", "React.js", "C++", "Solidity", "LLVM", "SQL", "Git", "Apache Hadoop and Hive"];

export const blogSummary = [
    {
      key: "blog1",
      title: "Blog 1",
      link: "#blog1",
      description: "Description 1"
    },
    {
      key: "blog2",
      title: "Blog 2",
      link: "#blog2",
      description: "Description 2"
    },
    {
      key: "blog3",
      title: "Blog 3",
      link: "#blog3",
      description: "Description 3"
    },
    {
      key: "blog4",
      title: "Blog 4",
      link: "#blog4",
      description: "Description 4"
    }
  ];
