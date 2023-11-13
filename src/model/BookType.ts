class BookType {
    constructor(
      public id: number,
      public title: string,
      public isbn: string,
      public imageUrl: number,
      public description: string,
      public original_publication_date: string,
      public averageRating: number,
      public numPages: number,
      public authors: [],
      public completionDate: Date
    ) {}
  }

export default BookType;