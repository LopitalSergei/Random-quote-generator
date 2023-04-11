"use strict"

let quotes = {
	"- Buddah": '"The mind is everything. What you think you become."',
	"- Jules Renard": '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
	"- Albert Einstein": '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it\'s beauty."',
	"- Lana Del Rey": `"Who are you?
	Are you in touch with all of your darkest fantasies?
	Have you created a life for yourself where you can experience them?
	I have. I am fucking crazy.
	But I am free."`,
	"- Candace Bushnell": `"Maybe some women aren't meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them.
	-Carrie Bradshaw"`,
	"- Pierce Brown": '"Man cannot be freed by the same injustice that enslaved it."',
	"- Deepak Chopra": '"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."',
	"- Madeline Miller": '"Bury us, and mark our names above. Let us be free."',
	"- Aaron Lauritsen": '"There is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow."',
	"- Alysha Speer": '"You never really know what\'s coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity."',
	"- Mary Astell": '"If all men are born free, how is it that all women are born slaves?"',
	"- Monique Duval": '"She decided to free herself, dance into the wind, create a new language. And birds fluttered around her, writing “yes” in the sky."',
	"- Jon Krakauer": '"He was unheeded, happy, and near to the wild heart of life. He was alone and young and wilful and wildhearted, alone amid a waste of wild air and brackish waters and the seaharvest of shells and tangle and veiled grey sunlight."',
	"- C.S. Lewis": '"I was not born to be free---I was born to adore and obey."',
	"- John Galsworthy": '"Life calls the tune, we dance."',
	"- Aaron Lauritsen": '"The struggles we endure today will be the ‘good old days’ we laugh about tomorrow."',
	"- Jenny Valentine": '"Even when you’d lost everything you thought there was to lose, somebody came along and gave you something for free."',
	"- Anne Morrow Lindbergh": '"Him that I love, I wish to be free -- even from me."',
	"- Jamie Ford": '"The library is like a candy store where everything is free."',
	"- Nenia Campbell": '"You want to be free. You also want to be mine. You can\'t be both."',
	"- Lauren DeStefano": '"But there’s no such thing as free. There are only different and more horrible ways to be enslaved."',
}

function generateQuote() {
	let authors = Object.keys(quotes);

	let author = authors[Math.floor(Math.random() * authors.length)];


	let quote = quotes[author];

	console.log(authors);
	console.log(author);
	console.log(quote);

	document.getElementById("quote").innerHTML = quote;
	document.getElementById("author").innerHTML = author;
}