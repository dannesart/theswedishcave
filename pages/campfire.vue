<template>
  <NuxtLayout>
    <Chunk>
      <Hero>
        <template v-slot:left>
          <Headline :size="1">
            Legends by the Fire
            <span
              class="font-antonio text-3xl md:text-[2.5rem] block leading-normal"
              >Epic Tales of Gus & His Fearless Tribe.</span
            >
          </Headline>
        </template>
        <template v-slot:right>
          <div class="hidden md:flex flex-1 justify-center items-center">
            <FireIcon />
          </div>
        </template>
      </Hero>
    </Chunk>
    <Chunk>
      <section class="grid gap-28">
        <article class="grid gap-10">
          <Headline :size="2"> Gus Goes to Space: A Branding Odyssey </Headline>
          <Like />
          <div class="grid gap-24 md:grid-cols-[1fr,auto]">
            <Paragraph>
              <div class="grid gap-5 text-xl">
                <p>
                  One day, Gus, the caveman with a passion for bad branding,
                  woke up to an unusual sight—a shiny spaceship parked right
                  outside his cave.
                </p>

                <p>
                  "Ugghhh... what's this?" Gus mumbled, scratching his messy
                  hair. He had never seen anything so sleek, so modern.
                </p>
                <p>
                  A voice boomed from the spaceship's speakers: "Hello, Gus!
                  We've come to take you to space!"
                </p>
                <p>
                  "Space?" Gus grunted. "I thought you said 'face.' Are we
                  branding faces?"
                </p>

                <p>
                  "No, Gus! We’re going to space. To explore new worlds and
                  bring stellar branding to the galaxy!"
                </p>
                <p>
                  Gus thought for a moment. "Hmm... Could be fun, as long as I
                  don’t have to redesign anything."
                </p>
                <p>
                  Before Gus could protest, the spaceship's door opened with a
                  loud whoosh, and he was swept inside. The interior was filled
                  with buttons, lights, and shiny surfaces that looked too new
                  to understand.
                </p>
                <p>
                  As the spaceship zoomed off, Gus was strapped into his seat,
                  looking out the window at the stars. “Stars,” he muttered,
                  "always wanted to make one for my cave logo."
                </p>
                <p>
                  The journey was long, but Gus kept busy imagining branding for
                  space aliens. "Maybe I could help these guys! They could use a
                  logo... a sleek one, with an alien head and something
                  futuristic... with a good tagline."
                </p>
                <p>
                  The spaceship arrived at a distant planet. Gus stepped out,
                  his boots crunching on the strange, purple ground. The
                  locals—little green creatures with antennae—greeted him with
                  confused expressions.
                </p>
                <p>
                  "Ugghh, you guys look like you need some branding," Gus said,
                  nodding thoughtfully. "Let me just fix that. We’ll call it...
                  ‘Galaxy Goo’!"
                </p>
                <p>
                  A few hours later, Gus had transformed the alien planet's
                  entire look. The green creatures were overjoyed, holding up
                  their new logo: a glowing slime bucket with a sleek font. "We
                  love it! It's futuristic, it's fresh!" they cheered.
                </p>
                <p>Gus grinned. "I told ya. Branding is universal!"</p>
                <p>
                  As he boarded the spaceship to head back to Earth, Gus looked
                  out the window one last time. He smiled, knowing that no
                  matter how far you go—whether to outer space or back to the
                  Stone Age—good branding always shines through.
                </p>
              </div>
            </Paragraph>
            <div class="md:h-96 md:w-96">
              <Image :src="'gus.webp'" :expandable="false" />
            </div>
          </div>
        </article>

        <article class="grid gap-10">
          <Headline :size="2">
            Gus and the Brave Cavemen: The Quest for the Fireberry
          </Headline>
          <Like />
          <Paragraph>
            <div class="grid gap-5 text-xl">
              <p>
                In a time long before hashtags and digital marketing, Gus was
                not just the caveman of branding fame—he was the chief of the
                Brave Cavemen. And his tribe? They weren’t your average
                prehistoric bunch. Oh no, they were bold, reckless, and ready
                for anything. They had one goal: to conquer the Fireberry—a
                mystical fruit that only grew at the top of the Magma Mountain.
              </p>
              <p>
                Why? Well, because eating a Fireberry would make you the
                strongest caveman on Earth. And Gus? He was already pretty
                strong, but after that failed attempt to lift a mammoth’s skull
                to use as a helmet (don't ask), he needed that extra boost.
              </p>
              <p>
                Gus gathered his crew: Grunk, the burly and utterly confused
                cave-dweller who once tried to ride a sabretooth tiger into
                battle but ended up getting chased by it instead; Thrax, the
                muscle-bound but dim-witted warrior who once mistook a rock for
                a baby and tried to nurse it; and Zara, the only one who
                actually knew how to read—well, cave paintings anyway.
              </p>
              <p>
                "Alright, lads," Gus said, standing in front of the tribe, a
                spear in hand, "today we go to the top of Magma Mountain to
                claim the Fireberry. But remember—this isn’t just a quest for
                strength. It's a test of bravery. And no matter what, we must
                return with the fruit. Got it?"
              </p>
              <p>
                “Got it!” shouted Grunk, throwing his club into a tree. "Wait,
                what are we doing again?"
              </p>
              <p>
                “We’re getting the Fireberry!” Gus growled, slapping Grunk on
                the back so hard that he stumbled forward, knocking into Zara.
              </p>
              <p>
                “Yeah, yeah!” Grunk mumbled, his brain clearly still thinking
                about rocks.
              </p>
              <p>
                With that, they set off, clambering over boulders, trudging
                through swampy marshes, and narrowly avoiding a herd of
                stampeding woolly mammoths that had no respect for personal
                space.
              </p>
              They reached the foot of Magma Mountain, the ground beneath their
              feet shaking from the eruptions of the volcano above. Lava hissed
              and splattered around them like wild confetti at a party that had
              gotten way out of hand. Gus cracked his knuckles. “This is it.
              Time for some real adventure.”
              <p>
                As they began their ascent, Grunk kept trying to climb up the
                side of the mountain by holding onto rocks that weren’t really
                rocks at all but rather molten lava—which, as expected, didn't
                end well.
              </p>
              <p>
                “Grunk!” Gus yelled, watching him slowly catch on fire. “You
                can’t hold lava with your bare hands! Use your brain for once!”
              </p>
              <p>“I’m trying!” Grunk yelped, shaking his hand in a panic.</p>
              <p>Gus sighed. “Fine, let’s just keep moving, fire and all.”</p>
              <p>
                After dodging fire-spitting geysers, navigating across
                treacherous cliffs that seemed to be held together only by hope
                and poor decisions, and losing Zara to a particularly stubborn
                tar pit (she did eventually get out—mostly), they finally
                reached the summit. There, sitting delicately under the light of
                the erupting volcano, was the Fireberry—a glowing fruit as
                bright and hot as a thousand suns.
              </p>
              <p>
                But just as Gus reached for it, the ground trembled beneath
                them. Out of the lava pit below, a lava monster with a flaming
                crown and a bad attitude erupted in a fiery roar.
              </p>
              <p>“Who dares to take the Fireberry?” the monster bellowed.</p>
              <p>“I do!” Gus shouted, standing tall and defiantly.</p>
              <p>
                The Lava Monster sneered. “No one takes it unless they can beat
                me in a dance-off.”
              </p>
              <p>“A dance-off?” Gus blinked. "Are you... serious?"</p>
              <p>
                “Yes,” the Lava Monster replied, raising his fiery arms. “It’s
                the ancient way.”
              </p>
              <p>
                Grunk, Zara, and Thrax looked at each other. "Gus... uh, you can
                dance, right?" Grunk asked, backing away from the flames.
              </p>
              <p>
                Gus rubbed his chin. "I mean... I'm good with the cave
                shuffle... but let's do this."
              </p>
              <p>
                And so, the battle began. The Lava Monster twisted, whirled, and
                spun in fiery movements, throwing his flaming arms in every
                direction. Gus—who’d once been known for his cave funk—dropped
                into a split, then went into a savage moonwalk, making Grunk
                cheer. "Ohhh, look at him go!"
              </p>
              <p>
                The Lava Monster faltered, confused by Gus's unexpected smooth
                moves. But Gus wasn’t done. He launched into a high-kick so
                strong it caused an avalanche of rocks to rain down. With one
                final twirl, Gus threw his arms wide, shouting, “And THAT, my
                friend, is how you dance prehistory style!”
              </p>
              <p>
                The Lava Monster, defeated and dazzled, collapsed onto the
                ground. “Alright, fine... you win. Take the Fireberry. Just...
                never make me do the Macarena again.”
              </p>
              <p>
                Gus grabbed the Fireberry, holding it aloft. "We did it, guys!"
                he shouted. “We’re the strongest now!”
              </p>
              <p>
                The tribe cheered, and with the Fireberry in hand, they
                descended the mountain, but not before Gus turned to the Lava
                Monster and said, “Hey, next time you need branding for your
                lava kingdom, you know where to find me!”
              </p>
            </div>
          </Paragraph>
        </article>
      </section>
    </Chunk>
  </NuxtLayout>
</template>
