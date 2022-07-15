import EpisodeInformation from "./EpisodeInformation";

export default function Episodes({ data }) {
  const episodesLinks = data.episode;
  
  const getEpisodeInfo = async (ep) => {
    const res = await fetch(ep);
    const info = await res.json();
    return { info }
  }

  return (
    <div className="relative">
      <div className="relative mb-[16px] font-roboto font-[500] text-[20px] text-[#8E8E93] tracking-[0.15px]">Episodes</div>
      {
        episodesLinks.map(link => {
          return (
            // eslint-disable-next-line react/jsx-key
            <EpisodeInformation url={link} />
          )
        })
      }
    </div>
  )
}