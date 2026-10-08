const booksData = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    averageRating: 5,
    ratingsCount: 0,
    publishedYear: 1988,
    description: "A journey of dreams and destiny.",
    coverImage: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
  },
  {
    title: "Ikigai",
    author: "Héctor García",
    genre: "Self Help",
    averageRating: 4,
    ratingsCount: 0,
    publishedYear: 2016,
    description: "The Japanese secret to a long and happy life.",
    coverImage: "https://m.media-amazon.com/images/I/71tbalAHYCL.jpg"
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    genre: "Finance",
    averageRating: 5,
    ratingsCount: 0,
    publishedYear: 2020,
    description: "Timeless lessons on wealth, greed, and happiness.",
    coverImage: "https://m.media-amazon.com/images/I/81Lb75rUhLL.jpg"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    averageRating: 5,
    ratingsCount: 0,
    publishedYear: 1949,
    description: "A brilliant novel about surveillance, control, and truth.",
    coverImage: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg"
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    genre: "Self Help",
    averageRating: 4,
    ratingsCount: 0,
    publishedYear: 2016,
    description: "A counterintuitive approach to living a better life.",
    coverImage: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg"
  },
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fantasy",
    averageRating: 4,
    ratingsCount: 0,
    publishedYear: 2020,
    description: "A magical library where every book contains a different life.",
    coverImage: "https://m.media-amazon.com/images/I/81KkrQWEHIL.jpg"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self Help",
    averageRating: 5,
    ratingsCount: 0,
    publishedYear: 2018,
    description: "Tiny changes that lead to remarkable results.",
    coverImage: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Finance",
    averageRating: 4,
    ratingsCount: 0,
    publishedYear: 1997,
    description: "Lessons about money, investing, and financial independence.",
    coverImage: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg"
  },
  {
    title: "The Power of Your Subconscious Mind",
    author: "Joseph Murphy",
    genre: "Self Help",
    averageRating: 4,
    ratingsCount: 0,
    publishedYear: 1963,
    description: "Unlocking the potential of your subconscious mind.",
    coverImage: "https://m.media-amazon.com/images/I/71sBtM3Yi5L.jpg"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    averageRating: 5,
    ratingsCount: 0,
    publishedYear: 1997,
    description: "A magical adventure begins at Hogwarts.",
    coverImage: "https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    averageRating: 5,
    ratingsCount: 0,
    publishedYear: 1960,
    description: "A powerful story about justice and racial inequality.",
    coverImage: "https://m.media-amazon.com/images/I/81gepf1eMqL._SL1500_.jpg"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    averageRating: 5,
    ratingsCount: 0,
    publishedYear: 1937,
    description: "Bilbo Baggins’ unexpected journey into Middle-earth.",
    coverImage: "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    averageRating: 5,
    ratingsCount: 0,
    publishedYear: 2011,
    description: "A brief history of humankind.",
    coverImage: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg"
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    genre: "Motivation",
    averageRating: 4,
    ratingsCount: 0,
    publishedYear: 1937,
    description: "The mindset behind success and wealth.",
    coverImage: "https://m.media-amazon.com/images/I/81dQwQlmAXL.jpg"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    averageRating: 4,
    ratingsCount: 0,
    publishedYear: 1925,
    description: "The American dream and the Jazz Age.",
    coverImage: "https://m.media-amazon.com/images/I/81af+MCATTL.jpg"
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    genre: "Historical Fiction",
    averageRating: 5,
    ratingsCount: 0,
    publishedYear: 2005,
    description: "A young girl finds solace in books during WWII.",
    coverImage: "https://m.media-amazon.com/images/I/51APkyJzNlL._SY445_SX342_ControlCacheEqualizer_.jpg"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Classic",
    averageRating: 3,
    ratingsCount: 0,
    publishedYear: 1951,
    description: "A teenager's journey through identity and belonging.",
    coverImage: "https://m.media-amazon.com/images/I/71OR1eUureL.jpg"
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    averageRating: 5,
    ratingsCount: 0,
    publishedYear: 2019,
    description: "A shocking psychological thriller about silence and secrets.",
    coverImage: "https://m.media-amazon.com/images/I/81MbPCEd5-L.jpg"
  },
  {
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    genre: "Thriller",
    averageRating: 4,
    ratingsCount: 0,
    publishedYear: 2015,
    description: "A woman becomes entangled in a mysterious disappearance.",
    coverImage: "https://m.media-amazon.com/images/I/71n7F6C5G3L.jpg"
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    genre: "Romance",
    averageRating: 4,
    ratingsCount: 0,
    publishedYear: 2012,
    description: "A heartfelt story of love and loss.",
    coverImage: "https://m.media-amazon.com/images/I/71rbJB42QpL.jpg"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    averageRating: 5,
    ratingsCount: 0,
    publishedYear: 1813,
    description: "A timeless romantic comedy of manners.",
    coverImage: "https://m.media-amazon.com/images/I/81Ox45J2FWL.jpg"
  },
  {
    title: "The Shining",
    author: "Stephen King",
    genre: "Horror",
    averageRating: 5,
    ratingsCount: 0,
    publishedYear: 1977,
    description: "A terrifying tale of a haunted hotel.",
    coverImage: "https://m.media-amazon.com/images/I/81FDGJv9uYL.jpg"
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Sci-Fi",
    averageRating: 5,
    ratingsCount: 0,
    publishedYear: 1965,
    description: "A sci-fi epic about politics, power, and prophecy.",
    coverImage: "https://m.media-amazon.com/images/I/91E8stetm4L.jpg"
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    genre: "Drama",
    averageRating: 5,
    ratingsCount: 0,
    publishedYear: 2003,
    description: "A story of friendship, guilt, and redemption.",
    coverImage: "https://m.media-amazon.com/images/I/81AfzrWcU-L.jpg"
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    genre: "Business",
    averageRating: 4,
    ratingsCount: 0,
    publishedYear: 2011,
    description: "A framework for building successful startups.",
    coverImage: "https://m.media-amazon.com/images/I/81jgCiNJPUL.jpg"
  }
];

export default booksData;
