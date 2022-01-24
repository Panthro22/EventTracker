export class User {
    id: number;
    firstName: string | undefined;
    lastName: string | undefined;
    username: string| undefined;
    password: string| undefined;
    email: string| undefined;
    role: string| undefined;
    enabled: string| undefined;
    dailyLogEntries: any[] = [];

  constructor(id: number =0, firstName?: string, lastName?: string, username?: string, password?: string, email?: string, role?: string, enabled?: string){
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.username = username;
      this.password = password;
      this.email = email;
      this.role = role;
      this.enabled = enabled;
      this.dailyLogEntries = [];

  }

}
