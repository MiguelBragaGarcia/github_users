export interface IRepository {
    id: number;
    name: string;
    html_url: string;
    stargazers_count:number;
    watchers_count:number;

    owner: {
        avatar_url:string;
    }
}