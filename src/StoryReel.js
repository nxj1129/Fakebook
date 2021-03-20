import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      {/* Story */}
      <Story
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-x1oForgN-5U%2FUrdhZNzWIgI%2FAAAAAAAAoj4%2FbrKrimAoxE8%2Fs1600%2FRocky%2BIII%2Bposter%2B2.jpg&f=1&nofb=1"
        profileSrc="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsites.psu.edu%2Fconnorzimmerman%2Fwp-content%2Fuploads%2Fsites%2F4939%2F2014%2F04%2F091910rocky_fanart2.png&f=1&nofb=1"
        title="Rocky Balboa"
      />
      <Story
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdnb.artstation.com%2Fp%2Fassets%2Fimages%2Fimages%2F003%2F072%2F851%2Flarge%2Fthe-frisbeeman-apollo-creed-final-low.jpg%3F1490367527&f=1&nofb=1"
        profileSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette4.wikia.nocookie.net%2Fvsbattles%2Fimages%2Fc%2Fcd%2FApollo_creed.jpg%2Frevision%2Flatest%3Fcb%3D20160417005817&f=1&nofb=1"
        title="Apollo Creed"
      />
      <Story
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.WO39-YvHEVtnwdolLmpbowHaEx%26pid%3DApi&f=1"
        profileSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Thw-ucogWLpf4LSYVHbYGQHaFA%26pid%3DApi&f=1"
        title="James 'Clubber' Lang"
      />
      <Story
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Frocky%2Fimages%2F8%2F83%2FAdonis.jpeg%2Frevision%2Flatest%3Fcb%3D20151224185437&f=1&nofb=1"
        profileSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com%2Fimages%2Fcharacters_opt%2Fp-Creed-Michael-B-Johnson.jpg&f=1&nofb=1"
        title="Adonis 'Donnie' Johnson"
      />
    </div>
  );
}

export default StoryReel;
