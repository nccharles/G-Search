export class User {
   constructor(public created_at: string,
    public avatar_url: any,
    public followers: number,
    public following: number,
    public repos_url: string,
    public html_url: string,
    public login: string,
    public blog: string,
    public bio: string,
    public public_repos: string){}
}