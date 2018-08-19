function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  );
}

export class User {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  isActive: boolean;

  constructor({
    id = '',
    firstName = '',
    middleName = '',
    lastName = '',
    isActive = true,
  } = {}) {
    this.id = id || guid();
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.isActive = isActive;
  }
}
