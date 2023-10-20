export class  Users {
    id: any;
    username: String;
    email: String;
    state: any;
    lastName: String;
    phoneNumber: any;
    password: any;

    postCode: any;
    address: String;
    userType: String;
    country: String;
    city: String;
    clientType: String;
    companyName: String;
    paymentEmail: String;
    roles: Role[];
  }
  
  export class Role {
    id: any;
    name: string;
  }