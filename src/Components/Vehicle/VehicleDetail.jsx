import VehicleHero from "./VehicleHero";
import VehicleIntro from "./VehicleIntro";
import VehicleExpand from "./VehicleExpand";
import VehicleFeatures from "./VehicleFeatures";
import VehicleOutline from "./VehicleOutline";
import VehicleArch from "./VehicleArch";
import VehicleGallery from "./VehicleGallery";
import VehicleSplit from "./VehicleSplit";
import VehicleClosing from "./VehicleClosing";
import VehicleExplore from "./VehicleExplore";

// Página de vehículo reutilizable: todo el contenido llega por props desde data/vehicles.js
function VehicleDetail({ vehicle, next }) {
  return (
    <article className="vehicle-page">
      <VehicleHero vehicle={vehicle} />
      <VehicleIntro text={vehicle.intro} />
      <VehicleExpand {...vehicle.expand} />
      <VehicleFeatures {...vehicle.features} />
      <VehicleOutline {...vehicle.outline} />
      <VehicleArch {...vehicle.arch} />
      <VehicleGallery images={vehicle.gallery} />
      <VehicleSplit {...vehicle.split} />
      <VehicleClosing text={vehicle.closing} />
      <VehicleExplore {...vehicle.explore} vehicle={vehicle} next={next} />
    </article>
  );
}

export default VehicleDetail;
