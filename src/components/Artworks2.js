import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Artworks2.css";

const artworks = [
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image1.jpg`,
        alt: "@priyanka.raj30",
        name: null,
        description:
            "Darkness cannot drive out darkness, Only light can do that. Like at night, The city lights.",
        artist: "@priyanka.raj30",
        medium: "Water Painting",
        type: "Artwork",
        link: "https://www.instagram.com/priyanka.raj30",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image2.jpg`,
        alt: "@saurav_parida",
        name: null,
        description: "You get what you focus on. So focus on what you want.",
        artist: "@saurav_parida",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/saurav_parida",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image3.jpg`,
        alt: "@sunidhisinha15",
        name: null,
        description:
            "You carry both lightening and thunder in the space between your bones and your soul. Become the storm you are hiding from. A hurricane does not run from the rain.",
        artist: "@sunidhisinha15",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/sunidhisinha15",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image4.jpg`,
        alt: "@aditirathore650",
        name: null,
        description:
            "Your life is a canvas... Make sure you paint yourself a whole lot of colorful days.",
        artist: "@aditirathore650",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/aditirathore650",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image5.jpg`,
        alt: "@i.do.it.all_",
        name: null,
        description:
            "She's an old soul With young eyes, A vintage heart, And a beautiful mind. She...... Respect her. Support her. Love her. (tilt your phone to see more)",
        artist: "@i.do.it.all_",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/i.do.it.all_",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image6.jpg`,
        alt: "@jeevan0981",
        name: null,
        description:
            "And the sun took a step back, the leaves lulled themselves to sleep and autumn was awakened.",
        artist: "@jeevan0981",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/jeevan0981",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image7.jpg`,
        alt: "@nishikasingla",
        name: null,
        description: "Everything in universe has rhythm, Everything dances.",
        artist: "@nishikasingla",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/nishikasingla",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image8.jpg`,
        alt: "@itzz_lucky__",
        name: null,
        description:
            '"Win or lose, I always focus only on giving my 100%" - P. V. Sindhu',
        artist: "@itzz_lucky__",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/itzz_lucky__",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image9.jpg`,
        alt: "@sunidhisinha15",
        name: null,
        description:
            "As above, So below. As the universe, So the soul. As without, So within.",
        artist: "@sunidhisinha15",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/sunidhisinha15",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image10.jpg`,
        alt: "@sunidhisinha15",
        name: null,
        description:
            "As above, So below. As the universe, So the soul. As without, So within.",
        artist: "@sunidhisinha15",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/sunidhisinha15",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image11.jpg`,
        alt: "@sunidhisinha15",
        name: null,
        description:
            "As above, So below. As the universe, So the soul. As without, So within.",
        artist: "@sunidhisinha15",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/sunidhisinha15",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image12.jpg`,
        alt: "@sunidhisinha15",
        name: null,
        description:
            "As above, So below. As the universe, So the soul. As without, So within.",
        artist: "@sunidhisinha15",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/sunidhisinha15",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image13.jpg`,
        alt: "@_an.isha__",
        name: null,
        description: "IKIGAI❤️",
        artist: "@_an.isha__",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/_an.isha__",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image14.jpg`,
        alt: "@dyn._.amit._.e",
        name: null,
        description:
            "Influential people don't need to copy others rather they are copied by people.",
        artist: "@dyn._.amit._.e",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/dyn._.amit._.e",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image15.jpg`,
        alt: "@priyanka.raj30",
        name: null,
        description:
            "Who says, Who says you're not perfect. Who says you're not worth it. Who says you're the only one that's hurting. Trust me, That's the price of beauty, Who says you're not pretty. Who says you're not beautiful, Who says.",
        artist: "@priyanka.raj30",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/priyanka.raj30",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image16.jpg`,
        alt: "@itzz_lucky__",
        name: null,
        description: "A smile need not be perfect It just needs to be pure.",
        artist: "@itzz_lucky__",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/itzz_lucky__",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image17.jpg`,
        alt: "@aditirathore650",
        name: null,
        description:
            "And now that you don't have to be perfect, you can be good.",
        artist: "@aditirathore650",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/aditirathore650",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image18.jpg`,
        alt: "@yyashi_singh",
        name: null,
        description:
            '"I am the monster parents tell their children about at night".',
        artist: "@yyashi_singh",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/yyashi_singh",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image19.jpg`,
        alt: "@jhanvi_vlogs",
        name: null,
        description:
            "The wind is rising, and the air is wild with leaves. We have had our summer evenings; now for October eves.",
        artist: "@jhanvi_vlogs",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/jhanvi_vlogs",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image20.jpg`,
        alt: "@manya_goel_",
        name: null,
        description:
            "FOR THE FEARLESS!!! And they roared as loud as thunder and carried lightning in the strike of their cruelty, but what are thunder and lightning to fearless girls who are used to carrying entire storms and hurricanes on their fingertips? - NIKITA GILL",
        artist: "@manya_goel_",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/manya_goel_",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image21.jpg`,
        alt: "@shekharbiswas",
        name: null,
        description: "Fall. If you wish to fly.",
        artist: "@shekharbiswas",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/shekharbiswas",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image22.jpg`,
        alt: "@bharat_0014",
        name: null,
        description:
            '"Hope - Hope in the face of difficulty. Hope in the face of uncertainty. The audacity of hope!" - Barack Obama',
        artist: "@bharat_0014",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/bharat_0014",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image23.jpg`,
        alt: "@vanni.dalal",
        name: "TAJ MAHAL",
        description: "No wonder its a wonder !!! ✨",
        artist: "@vanni.dalal",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/vanni.dalal",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image24.jpg`,
        alt: "@bharat_0014",
        name: null,
        description: "Be like a peacock and dance with all of your beauty.",
        artist: "@bharat_0014",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/bharat_0014",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image25.jpg`,
        alt: "@_amanxsharma_",
        name: null,
        description:
            "\"Sometimes things just happen to you. They just happen. You can't help it, but it's what you do next that counts.' Not what happens but what you decide to do about it\" ~Hannah Baker(Katherine Langford) in '13 Reasons Why'",
        artist: "@_amanxsharma_",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/_amanxsharma_",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image26.jpg`,
        alt: "@shades_of_my_passion",
        name: null,
        description:
            "Always gratifying to find out that one's nemesis is altogether lacking in style.",
        artist: "@shades_of_my_passion",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/shades_of_my_passion",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image27.jpg`,
        alt: "@s_yankita22",
        name: null,
        description: "Take time to do what makes your soul happy♥️.",
        artist: "@s_yankita22",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/s_yankita22",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image28.jpg`,
        alt: "@artigeer",
        name: null,
        description:
            "“Life's pretty good, and why wouldnt it be? I'm a pirate, after all.” ~Johnny Depp",
        artist: "@artigeer",
        medium: "Charcoal",
        type: "Artwork",
        link: "https://www.instagram.com/artigeer",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image29.jpg`,
        alt: "@rishabhrajput9609",
        name: null,
        description:
            "'Just living is not enough', said the butterfly, 'one must have sunshine, freedom and a little flower'",
        artist: "@rishabhrajput9609",
        medium: "Charcoal",
        type: "Artwork",
        link: "https://www.instagram.com/rishabhrajput9609",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image30.jpg`,
        alt: "@naved1747",
        name: null,
        description:
            "You don’t want to let the rest of your life go by without anyone else hearing you play, do you? – Cosette",
        artist: "@naved1747",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/naved1747",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image31.jpg`,
        alt: "@harrystyles",
        name: null,
        description: '"Dreams are dreams until you make them real"',
        artist: "@sarthak_m3702",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/sarthak_m3702",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image32.jpg`,
        alt: "@sindhu_art9702",
        name: null,
        description:
            '"Grace was in all her steps, heaven in her eye, in every gesture dignity and love." — John Milton, ‘Paradise Lost’.',
        artist: "@sindhu_art9702",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/sindhu_art9702",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image33.jpg`,
        alt: "@naved1747",
        name: null,
        description:
            "Won't you be reluctant if no one listens your music? - Cosette",
        artist: "@naved1747",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/naved1747",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image34.jpg`,
        alt: "@fineartsclub.nitkkr",
        name: null,
        description:
            '"The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for." ~Bob Marley',
        artist: "@fineartsclub.nitkkr",
        medium: null,
        type: "Wall Painting",
        link: "https://www.instagram.com/fineartsclub.nitkkr",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image35.jpg`,
        alt: "@sarthak_m3702",
        name: null,
        description:
            '"When you play characters, you shouldn\'t just be putting on their characteristics - you should be finding it inside yourself." -@chadwickboseman',
        artist: "@sarthak_m3702",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/sarthak_m3702",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image36.jpg`,
        alt: "@harsh_.yd",
        name: null,
        description:
            '"People throw stones at you and you convert them into milestones."',
        artist: "@harsh_.yd",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/harsh_.yd",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image37.jpg`,
        alt: "@themysteriousenchantress",
        name: null,
        description:
            "Motherhood a transformative experience that encompasses a wide spectrum of emotions, challenges, and joys. It is a journey that begins with the miraculous creation of life, as a woman becomes a mother, forever changed by the profound bond she shares with her child.",
        artist: "@themysteriousenchantress",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/themysteriousenchantress",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image38.jpg`,
        alt: "@sarthak_m3702",
        name: null,
        description:
            '"The truth is you don\'t know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed."',
        artist: "@sarthak_m3702",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/sarthak_m3702",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image39.jpg`,
        alt: "@artigeer",
        name: null,
        description:
            "May the divine tunes of Lord Krishna's flute soothe your soul and give you inner peace. Celebrating the birth of Lord Krishna, a symbol of love, wisdom, and devotion on this auspicious Janmashtami! May his blessings fill our lives with joy and harmony, guiding us towards a path of righteousness. Let's break the 'matki' of challenges and embrace the sweetness of his teachings. Wishing everyone a blissful Janmashtami filled with divine love and celebration!",
        artist: "@artigeer",
        medium: "Pen",
        type: "Artwork",
        link: "https://www.instagram.com/artigeer",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image40.jpg`,
        alt: "@artigeer",
        name: null,
        description:
            "May the divine tunes of Lord Krishna's flute soothe your soul and give you inner peace. Celebrating the birth of Lord Krishna, a symbol of love, wisdom, and devotion on this auspicious Janmashtami! May his blessings fill our lives with joy and harmony, guiding us towards a path of righteousness. Let's break the 'matki' of challenges and embrace the sweetness of his teachings. Wishing everyone a blissful Janmashtami filled with divine love and celebration!",
        artist: "@artigeer",
        medium: "Pen",
        type: "Artwork",
        link: "https://www.instagram.com/artigeer",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image41.jpg`,
        alt: "@sarthak_m3702",
        name: null,
        description:
            "Dare to dream big, and work tirelessly to make it happen.",
        artist: "@sarthak_m3702",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/sarthak_m3702",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image42.jpg`,
        alt: "@sarthak_m3702",
        name: null,
        description: "जय श्री राम 🚩🚩",
        artist: "@sarthak_m3702",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/sarthak_m3702",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image43.jpg`,
        alt: "@anuj__dhillon",
        name: null,
        description:
            '"Nature always wears the colors of the spirit, painting the world with the hues of our innermost thoughts and emotions."',
        artist: "@anuj__dhillon",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/anuj__dhillon",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image44.jpg`,
        alt: "@imaditya572",
        name: null,
        description:
            '"Shrinking into action, Ant-Man stands tall. Tiny yet mighty, his courage never small. With great power, he protects us all."',
        artist: "@imaditya572",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/imaditya572",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image45.jpg`,
        alt: "@oops_ishaa",
        name: null,
        description:
            "Thinking u can run from me is just a bait I am watching, ya don't need to wait.",
        artist: "@oops_ishaa",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/oops_ishaa",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image46.jpg`,
        alt: "@sarthakanandnit",
        name: null,
        description:
            "Reflections of the eternal 🎨✨ The ghats, the river, and the pulsing life along its banks - a timeless tale of India's spiritual essence, where the past, present, and future converge in a dance of colors, textures, and emotions ✨🇮🇳 ",
        artist: "@sarthakanandnit",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/sarthakanandnit",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image47.jpg`,
        alt: "@sarthak_m3702",
        name: null,
        description:
            '"There are always going to be bad things. But you can write it down and make a song out of it."',
        artist: "@sarthak_m3702",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/sarthak_m3702",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image48.jpg`,
        alt: "@manya_goel_",
        name: "कान्हा के बस नाम से झूम उठी राधा...",
        description:
            "A beautiful abstract piece of art portraying our beloved and highly revered Radha-Krishna❤",
        artist: "manya_goel_",
        medium: "Acrylic",
        type: "Artwork",
        link: "https://www.instagram.com/manya_goel_/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image49.jpg`,
        alt: "@itzz_lucky__",
        name: null,
        description: "Sidharth Malhotra❤️ - Sketch by - @itzz_lucky__",
        artist: "itzz_lucky__",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/itzz_lucky__/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image50.jpg`,
        alt: "@upadhyayashaurya",
        name: null,
        description: "Fury.",
        artist: "upadhyayashaurya",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/upadhyayashaurya/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image51.jpg`,
        alt: "@aditilathwal",
        name: null,
        description:
            "All the colours in the world cannot yet signify the black and white of my heart.",
        artist: "aditilathwal",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/aditilathwal/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image52.jpg`,
        alt: "@chrishemsworth",
        name: null,
        description:
            "“People who put themselves on the line and sacrifice their own safety for the greater good and for others, and anyone in any profession whose concern is the welfare for other people instead of the individual, are inspiring and important.“ @chrishemsworth",
        artist: "sparsh_garg1917",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/sparsh_garg1917/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image53.jpg`,
        alt: "@fineartsclub.nitkkr",
        name: null,
        description:
            "Reminiscing the 90s!🌟 Our own little (well not so little) attempt of presenting to you the theme through our all-time favourite, ever etched in our hearts, the one and only, 'TITANIC!' The Confluence'19 Remastered backdrop!",
        artist: "fineartsclub.nitkkr",
        medium: null,
        type: "Backdrop",
        link: "https://www.instagram.com/fineartsclub.nitkkr/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image54.jpg`,
        alt: "@akhil_bhuvaneswaran",
        name: null,
        description: '"some infinities are bigger than other infinities"',
        artist: "akhil_bhuvaneswaran",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/akhil_bhuvaneswaran/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image55.jpg`,
        alt: "@aditilathwal",
        name: null,
        description: "Innocence behind the anger defined at it's best.",
        artist: "aditilathwal",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/aditilathwal/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image56.jpg`,
        alt: "@pratyush.agrahari18",
        name: null,
        description:
            "There is art in everything, its just a way that how you see the things.",
        artist: "pratyush.agrahari18",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/pratyush.agrahari18/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image57.jpg`,
        alt: "@the_mandala_addict",
        name: null,
        description: "This world is a jungle. You either fight or run forever.",
        artist: "the_mandala_addict",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/the_mandala_addict/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image58.jpg`,
        alt: "@harshkirat_singh",
        name: null,
        description: "A captivating art by @harshkirat_singh",
        artist: "harshkirat_singh",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/harshkirat_singh/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image59.jpg`,
        alt: "@mkr869",
        name: null,
        description:
            "Art and happiness are the thing to be practiced, like the violin.",
        artist: "mkr869",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/mkr869/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image60.jpg`,
        alt: "@s_yankita022",
        name: null,
        description:
            "The old concept madhubani art work, you can notice the very elegant and subtle fine work.",
        artist: "s_yankita022",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/s_yankita022/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image61.jpg`,
        alt: "@raj_priyanka30",
        name: null,
        description:
            "Some lines and scribbles, can work out wonders ❤️ Here we have a beautiful artwork / doodle art by @raj_priyanka30",
        artist: "raj_priyanka30",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/raj_priyanka30/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image62.jpg`,
        alt: "@vamshi_krishna_komati",
        name: null,
        description: '"ɢɪʀʟs sʜᴏᴜʟᴅ ɴᴇᴠᴇʀ ʙᴇ ᴀғʀᴀɪᴅ ᴛᴏ ʙᴇ sᴍᴀʀᴛ"-єммα ωαтѕσи.',
        artist: "vamshi_krishna_komati",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/vamshi_krishna_komati/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image63.jpg`,
        alt: "@kamakshi_goyal",
        name: null,
        description:
            "“If you don’t know who I am, then maybe your best course would be to tread lightly.” Sketched by : @kamakshi_goyal",
        artist: "kamakshi_goyal",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/kamakshi_goyal/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image64.jpg`,
        alt: "@jeevan0981",
        name: "NVERSE",
        description: "NVERSE",
        artist: "jeevan0981",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/jeevan0981/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image65.jpg`,
        alt: "@akhil_bhuvaneswaran",
        name: null,
        description:
            "Nature made me a freak. Man made me a weapon. And god made it last too long. - Wolverine @thehughjackman",
        artist: "akhil_bhuvaneswaran",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/akhil_bhuvaneswaran/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image66.jpg`,
        alt: "@priyanka.raj30",
        name: null,
        description:
            "सफेद महलो में रहकर केसे जानोगे कितने रंगीन इन आंखो ने सपने बिनोए है? जीवन अंधकार से भरा है माना, पर रातो में ही आसमा ने तारे पिरोए है।",
        artist: "priyanka.raj30",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/priyanka.raj30/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image67.jpg`,
        alt: "@shashwat_xprose",
        name: null,
        description: "The pain lets you know, you are still alive!!",
        artist: "shashwat_xprose",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/shashwat_xprose/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image68.jpg`,
        alt: "@itzz_lucky__",
        name: null,
        description:
            "To the man who we've all loved To the man who taught what hardwork is To the man who showed it's possible to follow your dreams To the man who made it so large! To the man whose loss feels like a personal loss... To the man who we can not stop loving To the one and only @sushantsinghrajput ❤️ You left us too soon, but you'll never leave our hearts❤️",
        artist: "itzz_lucky__",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/itzz_lucky__/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image69.jpg`,
        alt: "@_pratyush.18_",
        name: null,
        description:
            "The monsters were never under my bed. Because the monsters were inside my head. I fear no monsters, for no monsters I see. Because all this time the monster has been me. -‘Nikita Gill’",
        artist: "_pratyush.18_",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/_pratyush.18_/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image70.jpg`,
        alt: "@sunidhisinha15",
        name: null,
        description:
            "We try to hide our feelings, But we forget that our eyes speak.",
        artist: "sunidhisinha15",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/sunidhisinha15/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image71.jpg`,
        alt: "@nishikasingla @shubhangijundia @deepika_sangwan98 @swikritikumari",
        name: null,
        description:
            "She had a Gypsy soul and a warrior spirit. She made no apologies for her wild heart. She left normal and regular to explore the outskirts of magical and extraordinary. And she was glorious.",
        artist: "nishikasingla @shubhangijundia @deepika_sangwan98 @swikritikumari",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/nishikasingla/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image72.jpg`,
        alt: "@rachit_keshari_",
        name: null,
        description:
            '"All of us do not have equal talent. But we have an equal opportunity to develop our talents." - A.P.J. Abdul Kalam',
        artist: "rachit_keshari_",
        medium: null,
        type: "Artwork",
        link: "https://www.instagram.com/rachit_keshari_/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image73.jpg`,
        alt: "@_pratyush.18_",
        name: null,
        description:
            "Breaking off pieces of yourself to fit into places will not help you belong, it will only make you bleed - Nikita Gill",
        artist: "_pratyush.18_",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/_pratyush.18_/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image74.jpg`,
        alt: "@yash__mittal_",
        name: null,
        description: '"Maybe thorns have roses"',
        artist: "yash__mittal_",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/yash__mittal_/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image75.jpg`,
        alt: "@yash__mittal_",
        name: null,
        description:
            "Twenty years from now you will be more disappointed by the things that you didn’t do, than by the ones you did do. So throw off the bowlines, Sail away from the safe harbor, Catch the trade winds in your sails. Explore. Dream. Discover.",
        artist: "yash__mittal_",
        medium: "Pencil",
        type: "Artwork",
        link: "https://www.instagram.com/yash__mittal_/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image77.jpg`,
        alt: "@fineartsclub.nitkkr",
        name: "Confluence 16",
        description: "Confluence 16 by @fineartsclub.nitkkr",
        artist: "fineartsclub.nitkkr",
        medium: null,
        type: "Backdrop",
        link: "https://www.instagram.com/fineartsclub.nitkkr/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image78.jpg`,
        alt: "@fineartsclub.nitkkr",
        name: "Confluence 17",
        description: "Confluence 17 by @fineartsclub.nitkkr",
        artist: "fineartsclub.nitkkr",
        medium: null,
        type: "Backdrop",
        link: "https://www.instagram.com/fineartsclub.nitkkr/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image79.jpg`,
        alt: "@fineartsclub.nitkkr",
        name: "Confluence 18",
        description: "Confluence 18 by @fineartsclub.nitkkr",
        artist: "fineartsclub.nitkkr",
        medium: null,
        type: "Backdrop",
        link: "https://www.instagram.com/fineartsclub.nitkkr/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image80.jpg`,
        alt: "@fineartsclub.nitkkr",
        name: "Confluence 19",
        description: "Confluence 19 by @fineartsclub.nitkkr",
        artist: "fineartsclub.nitkkr",
        medium: null,
        type: "Backdrop",
        link: "https://www.instagram.com/fineartsclub.nitkkr/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image81.jpg`,
        alt: "@fineartsclub.nitkkr",
        name: "Confluence 21 & 22",
        description: "Confluence 21 & 22 by @fineartsclub.nitkkr",
        artist: "fineartsclub.nitkkr",
        medium: null,
        type: "Backdrop",
        link: "https://www.instagram.com/fineartsclub.nitkkr/",
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Artworks/image82.jpg`,
        alt: "@fineartsclub.nitkkr",
        name: "Confluence 23",
        description: "Confluence 23 by @fineartsclub.nitkkr",
        artist: "fineartsclub.nitkkr",
        medium: null,
        type: "Backdrop",
        link: "https://www.instagram.com/fineartsclub.nitkkr/",
    },
];

function shuffleArray(array) {
    const shuffledArray = array.slice(); // Make a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
        ];
    }
    return shuffledArray;
}

const Artworks2 = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const initialMedium = query.get("medium") || "";
    const initialType = query.get("type") || "";
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [selectedMedium, setSelectedMedium] = useState(initialMedium);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState(initialType);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = (index) => {
        setCurrentImage(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const nextImage = () => {
        setCurrentImage((currentImage + 1) % filteredArtworks.length);
    };

    const prevImage = () => {
        setCurrentImage(
            (currentImage - 1 + filteredArtworks.length) %
                filteredArtworks.length
        );
    };

    const mediums = [
        ...new Set(artworks.map((artwork) => artwork.medium).filter(Boolean)),
    ];
    const types = ["Artwork", "Backdrop", "Art Gallery", "Wall Painting"];

    // Memoized shuffled artworks
    const shuffledArtworks = useMemo(() => shuffleArray(artworks), [artworks]);

    const filteredArtworks = shuffledArtworks.filter((artwork) => {
        return (
            (selectedMedium === "" || artwork.medium === selectedMedium) &&
            (selectedType === "" || artwork.type === selectedType) &&
            ((artwork.name || "")
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
                (artwork.artist || "")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()))
        );
    });
    return (
        <div className="artworks-page">
            <h1>Artworks</h1>
            <div className="filters">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search Artworks"
                />
                <label>
                    Type:
                    <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                    >
                        <option value="">All</option>
                        {types.map((type, index) => (
                            <option key={index} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="medium-select">
                    Medium
                    <select
                        value={selectedMedium}
                        id="medium-select"
                        onChange={(e) => setSelectedMedium(e.target.value)}
                    >
                        <option value="">All</option>
                        {mediums.map((medium, index) => (
                            <option key={index} value={medium}>
                                {medium}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div className="gallery">
                {filteredArtworks.map((artwork, index) => (
                    <div
                        className="gallery-item"
                        key={index}
                        onClick={() => openModal(index)}
                    >
                        <img
                            src={artwork.src}
                            alt={artwork.alt}
                            className="gallery-image"
                        />
                        <div className="overlay">
                            <p>
                                {artwork.description.length >= 300
                                    ? artwork.description.substring(0, 300) +
                                      "..."
                                    : artwork.description || ""}
                            </p>
                            <p>
                                <strong>Artist:</strong> {artwork.artist}
                            </p>
                            {artwork.medium ? (
                                <p>
                                    <strong>Medium:</strong> {artwork.medium}
                                </p>
                            ) : null}
                        </div>
                    </div>
                ))}
            </div>

            {modalOpen && (
                <div id="myModal" className="modal">
                    <span className="close" onClick={closeModal}>
                        &times;
                    </span>
                    <div className="modal-navigation">
                        <div className="prev" onClick={prevImage}>
                            &lt;
                        </div>
                        <div className="modal-image">
                            <img
                                className="modal-content"
                                src={filteredArtworks[currentImage].src}
                                alt={filteredArtworks[currentImage].alt}
                            />
                            <p>
                                <a
                                    href={filteredArtworks[currentImage].link}
                                    className="artist-link"
                                >
                                    <strong>Artist:</strong>
                                    {filteredArtworks[currentImage].artist}
                                </a>
                                <br />{" "}
                                {filteredArtworks[currentImage].medium ? (
                                    <p>
                                        <strong>Medium:</strong>{" "}
                                        {filteredArtworks[currentImage].medium}
                                    </p>
                                ) : null}
                            </p>
                        </div>

                        <div className="next" onClick={nextImage}>
                            &gt;
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Artworks2;
