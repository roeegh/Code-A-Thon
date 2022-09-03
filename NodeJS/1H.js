/* 
    Input: The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters.
    Output: Return the words of the initial song that Big Mike used to make a dubsteb remix. Separate the words with a space.

    Example songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB') => 'WE ARE THE CHAMPIONS MY FRIEND'
*/ 

const songDecoder = (remix) => {
    return remix.replace(/(WUB)+/g, ' ').trim();
} 