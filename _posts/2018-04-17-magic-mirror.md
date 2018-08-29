---
layout: post
title:  "Mirror Mirror! - How I Build a Magic Mirror"
date:   2018-04-16 15:07:20
excerpt: "An overview for the development and design choices that went into the construction of an IOT smart mirror"
categories: [tutorial, writing]
comments: false
image:
  feature: ../../img/snow-white.jpg

---

Mirror Mirror, who is the most elegant programmer of them all?

![Cover Image](../../img/Cover.jpg){:class="rotate-right"}

WITTY ANSWER. This past summer I joined the group of Internet of Things enthusiasts and went and built my own smart mirror. For those unaware, a smart mirror is a double-sided mirror that sits in front of a monitor attached to a computer, raspberry pi being the popular choice. This post won't dive into the technical aspects of the hardware or software, but rather to give an overview of the approach and hopefully provide some tips for future builders. If you're looking for a more detailed guide on the hardware behind building a magic mirror, check out [Dylan Pierce's](http://blog.dylanjpierce.com/raspberrypi/magicmirror/tutorial/2015/12/27/build-a-magic-mirror.html) blog post as well as [this video](https://www.youtube.com/watch?v=fkVBAcvbrjU&t=) by HackerHouse. If you're looking for a guide on the software behind these these mirrors, checkout out the [MagicMirror²](https://github.com/MichMich/MagicMirror) project. MagicMirror² is an open-source, modular smart-mirror platform that has some built-in widgets and and a growing library of third party modules.

## The Monitor
The monitor should to be your starting point. Since the size of your monitor orders the size of your frame, you need to select a size before you go out and start buying wood. I recommend going bigger if you can. I got lucky and found a bright 25" monitor on craigslist that worked great. Any type should do, but you'll probably want to find one that's fairly bright that has HDMI input. Oh, and you have to be content with ripping off the bezel of your monitor >:)

## The Mirror
Choosing the type of mirror halted my progress for a while. Despite really only two main choices, glass and acrylic, it seemed like there were quite a few options out there. I This is what I determined for my build, and is subjective.

| Acrylic       |                       | Glass     |
|:-------------:|:---------------------:|:---------:|         
| lighter       | `weight`              | heavier   |
| susceptible   | `"fun house" effect`  | none      |
| more          | `light passage`       | less      |
| less          | `price`               | more      |
| low           | `chance of breaking`  | high      |
| nope          | `smudge resistance`   | nope      |

For these reasons, I chose to go with [this 12" x 24"  3mm thick](https://www.amazon.com/12-Acrylic-See-Through-Mirror-1mm/dp/B01G4MQ966/ref=sr_1_1?s=home-garden&ie=UTF8&qid=1520304107&sr=1-1&keywords=see%2Bthrough%2Bglass&th=1) acrylic mirror. I can see why some builders choose glass over acrylic. The rigidness of the glass prevents bends and warps in the mirror. This is that "fun house" effect I mentioned above. However, the light passage on most of these mirrors, even the ones that are specifically targeted towards magic mirror builders still didn't seem to have enough light passage to create a display that really pops. I think [this video](https://www.youtube.com/watch?v=nWSolSxpRT4) illustrates this well. There is a third option, mirror film, which is applied over a standard mirror. This seems to be a fairly popular choice for builders going for larger displays, like a big bathroom mirror. I didn't investigate much into these, but you can find plenty of information about them in the [MM builders forums](https://magicmirror.builders/).

# The Box
Building the casing and front-facing frame is likely the most taxing and time consuming part of the build process. It's helpful to have someone with at least some basic carpentry skills at your side for this part. Thankfully I had my stepfather, Dave to help me here. Many guides recommend using 2 x 4's to build the casings. However, we went with a 1 x 3 approach which resulted in a really slim and sleek looking case. We used similar boards to build the frame for the front. I won't go into the details here since the dimensions of your frame will be different than mine, but it's best to not over-think and do whichever works best for the type of mirror you'd like to build. 0Stick to a rigid guide if need be.

There are some select guides, ones I've not mentioned, that recommend using nails to secure your the boards. An easier approach is to use glue, liquid nails or otherwise, to secure the boards together and then use screws for additional security. The screw sizes should depend on the thickness of your boards, just ask your local home depot dude! What I've gather from the MM community is that glue is a better and more reliable solution.

# The software
While you could use any old locally hosted app to run your mirror on, it's hard to beat the platform that MagicMirror² provides. The community has an expanding number of modules for all kinds of


<!--more-->

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
