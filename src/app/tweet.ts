export class Tweet {
  message: string;
  published: string;
  tags: string[];
  tweetedBy: string;

  constructor(message: string, published: string, tags: string[], tweetedBy: string) {
    this.message = message;
    this.published = published;
    this.tags = tags;
    this.tweetedBy = tweetedBy;
  }
}
