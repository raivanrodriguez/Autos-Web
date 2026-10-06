import { Navigate, useParams } from "react-router-dom";
import VehicleDetail from "../Components/Vehicle/VehicleDetail";
import GleDetail from "../Components/Gle/GleDetail";
import { getVehicle, vehicles } from "../data/vehicles";

// Cada vehículo usa una de las dos plantillas (vehicle.template, se alternan en data/vehicles.js)
const templates = {
  maybach: VehicleDetail,
  gle: GleDetail
};

function VehiclePage() {
  const { slug } = useParams();
  const vehicle = getVehicle(slug);

  if (!vehicle) return <Navigate to="/" replace />;

  const index = vehicles.indexOf(vehicle);
  const next = vehicles[(index + 1) % vehicles.length];
  const Template = templates[vehicle.template] ?? VehicleDetail;

  // key={slug}: al pasar de un auto a otro se monta de cero y las animaciones se reinician
  return <Template key={slug} vehicle={vehicle} next={next} />;
}

export default VehiclePage;
