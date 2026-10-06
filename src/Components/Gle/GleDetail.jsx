import GleHero from "./GleHero";
import GleVideoExpand from "./GleVideoExpand";
import GleStatement from "./GleStatement";
import GleChapter from "./GleChapter";
import GlePairs from "./GlePairs";
import GleTabs from "./GleTabs";
import GleHybrid from "./GleHybrid";
import CrossfadeSlider from "../CrossfadeSlider";
import VehicleFeatures from "../Vehicle/VehicleFeatures";
import VehicleExplore from "../Vehicle/VehicleExplore";

// Segunda plantilla de vehículo (oscura), inspirada en la página del Mercedes-Benz GLE.
// Todo el contenido llega desde vehicle.gle (data/vehicles.js)
function GleDetail({ vehicle, next }) {
  const { gle } = vehicle;
  const [first, second] = gle.chapters;

  return (
    <article className="gle-page">
      <GleHero eyebrow={gle.eyebrow} title={gle.title} img={vehicle.img} letterbox={vehicle.letterbox} />
      <GleVideoExpand video={gle.video} poster={gle.crossfade.a.img} />
      <GleStatement text={gle.statement} />
      <CrossfadeSlider {...gle.crossfade} />

      <GleChapter {...first} />
      <VehicleFeatures {...first.features} dark />

      <GleChapter {...second} />
      <VehicleFeatures {...second.features} dark />

      <GlePairs pairs={gle.pairs} />
      <GleTabs {...gle.tabs} />
      <GleHybrid {...gle.hybrid} />
      <VehicleExplore {...gle.explore} next={next} />
    </article>
  );
}

export default GleDetail;
