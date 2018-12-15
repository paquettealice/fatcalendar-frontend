declare namespace GQL {
  export interface IQuest {
    userId: string;
    specializationId: string;
    questTypeId: string;
    datetime: string;
    difficulty: number;
    expPoints: number;
  }

  export interface ISpecialization {
    specializationId: string;
    title: string;
  }
}