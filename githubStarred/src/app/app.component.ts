import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { jsDocComment } from '@angular/compiler';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'githubStarred';
  
  constructor(public http:HttpClient){
    this.http.get('https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc&page=2')
    .subscribe(res=> { this.Github = res as Github
      this.list = this.Github.items })
  }
  Github:Github = new Github();
  Item:Item=new Item();
  list:Item[] = [new Item()];
}

  class Github {
    total_counts : number = 0;
    incomplete_results:boolean=false;
    items:Item[] = [new Item()];
  }
  class Item {
    id:number = 0;
    owner:Owner = new Owner();
    license:license = new license();
    node_id:string = "";
    name:string = "";
    full_name:string = "";
    private:boolean= false;
    html_url:string = "";
    description:string = "";
    fork:boolean=false;
    url:string="";
    forks_url:string="";
    keys_url:string="";
    collaborators_url:string="";
    teams_url:string="";
    hooks_url:string="";
    issue_events_url:string="";
    events_url:string="";
    assignees_url:string="";
    branches_url:string="";
    tags_url:string="";
    blobs_url:string="";
    git_tags_url:string="";
    git_refs_url:string="";
    trees_url:string="";
    statuses_url:string="";
    languages_url:string="";
    stargazers_url:string="";
    contributors_url:string="";
    subscribers_url:string="";
    subscription_url:string="";
    commits_url:string="";
    git_commits_url:string="";
    comments_url:string="";
    contents_url:string="";
    issue_comment_url:string="";
    compare_url:string="";
    archive_url:string="";
    merges_url:string="";
    downloads_url:string="";
    issues_url:string="";
    milestones_url:string="";
    pulls_url:string="";  
    notifications_url:string="";
    labels_url:string="";
    releases_url:string="";
    deployments_url:string="";
    created_at:string="";
    updated_at:string="";
    pushed_at:string="";
    git_url:string="";
    ssh_url:string="";
    clone_url:string="";
    svn_url:string="";
    homepage:string="";
    watchers_count:number=0;
    size:number=0;
    stargazers_count:number=0;
    language:string="";
    has_issues:boolean=false;
    has_projects:boolean=false;
    has_downloads:boolean=false;
    has_wiki:boolean=false;
    has_pages:boolean=false;
    forks_count:number=0;
    mirror_url:string="";
    archived:boolean=false;
    disabled:boolean=false;
    open_issues_count:number=0;
    forks:number=0;
    open_issues:number=0;
    watchers:number=0;
    score:number=0;
    default_branch:string="";
  }
  class Owner{
    id:number=0;
    login:string="";
    node_id:string="";
    avatar_url:string="";
    gravatar_id:string="";
    url:string="";
    html_url:string="";
    followers_url:string="";
    following_url:string="";
    gists_url:string="";
    starred_url:string="";
    subscriptions_url:string="";
    organizations_url:string="";
    repos_url:string="";
    events_url:string="";
    received_events_url:string="";
    type:string="";
    site_admin:boolean=false;
  }
  class license{
    key:string="";
    name:string="";
    spdx_id:string="";
    url:string="";
    node_id:string="";
  }