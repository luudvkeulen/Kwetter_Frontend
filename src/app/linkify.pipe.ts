import {Pipe, PipeTransform} from '@angular/core';
import {Tweet} from './tweet';

@Pipe({
  name: 'linkify'
})
export class LinkifyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return this.linkify(value);
  }

  private linkify(tweet: Tweet): string {
    // Replace mentions with url
    for (const mention of tweet.mentions) {
      const mentionwithprefix = `@${mention}`;
      tweet.message = tweet.message.replace(mentionwithprefix, '<a class="badge badge-light" href="users/$&">$&</a>');
      tweet.message = tweet.message.replace('@', '');
    }

    // Replace tags with url
    for (const tag of tweet.tags) {
      const tagwithprefix = `#${tag}`;
      console.log(tagwithprefix);
      tweet.message = tweet.message.replace(tagwithprefix, '<a class="hashtag" href="tweets/$&">$&</a>');
      tweet.message = tweet.message.replace('#', '');
    }

    return tweet.message;
  }

}
