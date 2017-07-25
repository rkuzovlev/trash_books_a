export enum BookLanguage {
    All = 0,
	Rus,
	Eng
}

export class Book {
	constructor(
		public id: number,
        public title: string,
        public img: string,
        public rating: number,
        public date: Date,
        public lang: BookLanguage,
        public description: string,
        public cost: number,
	){ }
}