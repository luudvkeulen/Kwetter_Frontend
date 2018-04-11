export class Tweet {
  message: string;
  published: string;
  tags: string[];
  mentions: string[];
  likes: string[];
  tweetedByString: string;
  tweetedBy_url: string;

  constructor(message: string, published: string, tags: string[], tweetedByString: string, tweetedBy_url: string, mentions: string[], likes: string[]) {
    this.message = message;
    this.published = published;
    this.tags = tags;
    this.tweetedByString = tweetedByString;
    this.tweetedBy_url = tweetedBy_url;
    this.mentions = mentions;
    this.likes = likes;
  }
}
