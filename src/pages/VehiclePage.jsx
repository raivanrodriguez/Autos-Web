import { Navigate, useParams } from "react-router-dom";
import VehicleDetail from "../Components/Vehicle/VehicleDetail";
import { getVehicle, vehicles } from "../data/vehicles";

function VehiclePage() {
  const { slug } = useParams();
  const vehicle = getVehicle(slug);

  if (!vehicle) return <Navigate to="/" replace />;

  const index = vehicles.indexOf(vehicle);
  const next = vehicles[(index + 1) % vehicles.length];

  // key={slug}: al pasar de un auto a otro se monta de cero y las animaciones se reinician
  return <VehicleDetail key={slug} vehicle={vehicle} next={next} />;
}

export default VehiclePage;
