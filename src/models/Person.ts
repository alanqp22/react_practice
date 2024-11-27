export class Person {
  private name: string;
  private lastName: string;
  private age: number;
  private ci: number;
  private married: boolean;

  constructor(
    name: string,
    lastName: string,
    age: number,
    ci: number,
    marreid: boolean
  ) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.ci = ci;
    this.married = marreid;
  }
}
