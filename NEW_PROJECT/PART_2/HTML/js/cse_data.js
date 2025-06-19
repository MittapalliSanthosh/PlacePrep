// This is your cse_data.js
const cseTopicsData = {
    'dsa': {
        title: 'Data Structures & Algorithms',
        icon: 'fas fa-code', // Font Awesome icon class
        overallProgress: 0, // Will be calculated
        topics: [
            {
                id: 'dsa-arrays',
                name: 'Arrays and Strings',
                notes: '<p>Arrays are fundamental data structures. Key concepts: contiguous memory, indexing.</p><h5>Common Problems:</h5><ul><li>Two Sum</li><li>Max Subarray</li><li>String Reversal</li></ul>',
                completed: false,
                questions: ['two-sum', 'max-subarray', 'sliding-window-maximum'] // Optional: IDs for coding questions
            },
            {
                id: 'dsa-linkedlist',
                name: 'Linked Lists',
                notes: '<p>Linked lists consist of nodes where each node contains data and a reference (link) to the next node in the sequence.</p><h5>Types:</h5><ul><li>Singly Linked List</li><li>Doubly Linked List</li><li>Circular Linked List</li></ul>',
                completed: false,
                questions: ['reverse-linkedlist', 'detect-cycle', 'merge-sorted-lists']
            },
            {
                id: 'dsa-trees',
                name: 'Trees (Binary, BST)',
                notes: '<p>Trees are hierarchical data structures. Binary Search Trees (BSTs) have a specific ordering property.</p><h5>Traversals:</h5><ul><li>In-order (LNR)</li><li>Pre-order (NLR)</li><li>Post-order (LRN)</li><li>Level-order (BFS)</li></ul>',
                completed: false,
                questions: ['binary-tree-traversal', 'validate-bst', 'shortest-path'] // 'shortest-path' usually for graphs
            },
            {
                id: 'dsa-graphs',
                name: 'Graphs',
                notes: '<p>Graphs are collections of nodes (vertices) and edges. Used to model networks.</p><h5>Algorithms:</h5><ul><li>Breadth-First Search (BFS)</li><li>Depth-First Search (DFS)</li><li>Dijkstra\'s Algorithm</li><li>Bellman-Ford</li></ul>',
                completed: false,
                questions: ['graph-bfs-dfs', 'dijkstra-algo', 'topological-sort']
            },
            {
                id: 'dsa-dp',
                name: 'Dynamic Programming',
                notes: '<p>Dynamic Programming (DP) is a method for solving complex problems by breaking them down into simpler subproblems.</p><h5>Key Concepts:</h5><ul><li>Optimal Substructure</li><li>Overlapping Subproblems</li><li>Memoization (Top-Down)</li><li>Tabulation (Bottom-Up)</li></ul>',
                completed: false,
                questions: ['fibonacci-dp', 'lcs-dp', 'knapsack-dp']
            },
            {
                id: 'dsa-sorting',
                name: 'Sorting & Searching',
                notes: '<p>Algorithms for arranging elements and finding elements in a collection.</p><h5>Sorting:</h5><ul><li>Bubble Sort, Selection Sort, Insertion Sort</li><li>Merge Sort, Quick Sort, Heap Sort</li></ul><h5>Searching:</h5><ul><li>Linear Search</li><li>Binary Search</li></ul>',
                completed: false,
                questions: ['merge-sort-impl', 'quick-sort-impl', 'binary-search-impl']
            }
        ]
    },
    'system-design': {
        title: 'System Design',
        icon: 'fas fa-cogs', // Changed from fa-project-diagram for better visual
        overallProgress: 0,
        topics: [
            {
                id: 'sd-basics',
                name: 'Fundamentals & CAP Theorem',
                notes: '<p>Core principles of designing large-scale distributed systems.</p><h5>Key Concepts:</h5><ul><li>Scalability (Vertical & Horizontal)</li><li>Reliability & Availability</li><li>Latency & Throughput</li><li>Consistency (CAP Theorem: Consistency, Availability, Partition Tolerance)</li></ul>',
                completed: false,
                questions: ['cap-theorem-explain', 'load-balancing-types']
            },
            {
                id: 'sd-databases',
                name: 'Databases (SQL vs NoSQL)',
                notes: '<p>Choosing the right database based on system requirements.</p><h5>SQL:</h5><ul><li>Relational, ACID properties. Examples: MySQL, PostgreSQL.</li></ul><h5>NoSQL:</h5><ul><li>Key-Value, Document, Column-family, Graph. Examples: MongoDB, Cassandra, Redis, Neo4j.</li><li>BASE properties, eventual consistency.</li></ul>',
                completed: false,
                questions: ['sql-vs-nosql-scenarios', 'database-sharding']
            },
            {
                id: 'sd-scalability',
                name: 'Scaling Strategies & Caching',
                notes: '<p>Techniques to handle increasing load.</p><h5>Methods:</h5><ul><li>Load Balancing</li><li>Caching (Client-side, CDN, Server-side, Database)</li><li>Database Replication & Sharding</li><li>Microservices</li><li>Message Queues (e.g., Kafka, RabbitMQ)</li></ul>',
                completed: false,
                questions: ['design-tinyurl', 'caching-strategies']
            },
            {
                id: 'sd-api',
                name: 'API Design (REST & GraphQL)',
                notes: '<p>Designing effective Application Programming Interfaces.</p><h5>REST:</h5><ul><li>Stateless, resource-based, standard HTTP methods.</li></ul><h5>GraphQL:</h5><ul><li>Query language for APIs, allows clients to request only needed data.</li></ul>',
                completed: false,
                questions: ['restful-api-principles', 'graphql-vs-rest']
            }
        ]
    },
    'programming': {
        title: 'Core CS & OS', // Combined for breadth
        icon: 'fas fa-microchip', // More hardware/OS related
        overallProgress: 0,
        topics: [
            {
                id: 'core-os',
                name: 'Operating Systems',
                notes: '<p>Fundamental concepts of Operating Systems.</p><h5>Topics:</h5><ul><li>Processes & Threads</li><li>Memory Management (Paging, Segmentation)</li><li>CPU Scheduling</li><li>File Systems</li><li>Concurrency & Deadlocks</li></ul>',
                completed: false,
                questions: ['process-vs-thread', 'deadlock-conditions']
            },
            {
                id: 'core-cn',
                name: 'Computer Networks',
                notes: '<p>Understanding how computers communicate.</p><h5>OSI Model Layers:</h5><ul><li>Physical, Data Link, Network, Transport, Session, Presentation, Application</li></ul><h5>TCP/IP Model:</h5><ul><li>Link, Internet, Transport, Application</li></ul><h5>Key Protocols:</h5><ul><li>HTTP, HTTPS, TCP, UDP, IP</li></ul>',
                completed: false,
                questions: ['tcp-vs-udp', 'osi-model-explain']
            },
            {
                id: 'core-dbms',
                name: 'DBMS Concepts',
                notes: '<p>Database Management Systems fundamentals beyond just SQL/NoSQL selection.</p><h5>Topics:</h5><ul><li>ACID vs BASE</li><li>Normalization (1NF, 2NF, 3NF, BCNF)</li><li>Indexing</li><li>Transactions & Concurrency Control</li></ul>',
                completed: false,
                questions: ['normalization-explain', 'acid-properties']
            },
            {
                id: 'prog-cpp', // Retaining one language specific for example
                name: 'C++ Fundamentals',
                notes: '<p>Core concepts of C++ for interviews.</p><h5>Key Areas:</h5><ul><li>Pointers & Memory Management</li><li>Object-Oriented Programming (Classes, Inheritance, Polymorphism)</li><li>Standard Template Library (STL) - Vectors, Maps, Sets, Algorithms</li></ul>',
                completed: false,
                questions: ['virtual-functions-cpp', 'stl-common-uses']
            }
        ]
    },
    // Removed web-dev to focus on core CSE for now, can be added back
    // 'web-dev': { ... } 
};