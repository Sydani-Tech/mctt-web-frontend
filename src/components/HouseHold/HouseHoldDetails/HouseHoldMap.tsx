import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import type { HouseholdData } from "@/typings/house-hold";
import { getHouseholdSize } from "@/utils/utils";
import { useAuth } from "@/components/context/AuthContext";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const HouseholdMap = ({
  households,
  selectedHousehold,
}: {
  households: HouseholdData[];
  selectedHousehold: HouseholdData;
}) => {
  const latitude =
    (selectedHousehold && selectedHousehold.geoCoordinates?.latitude) || 0;
  const longitude =
    (selectedHousehold && selectedHousehold.geoCoordinates?.longitude) || 0;

  const { user } = useAuth();
  return (
    <>
      {latitude && longitude && (
        <div className="h-[500px] w-full max-w-3xl rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={[latitude, longitude]}
            zoom={13}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[latitude, longitude]} icon={customIcon}>
              <Popup>
                <strong>{selectedHousehold?.householdHeadName}</strong> <br />
                Enumerator: {user?.fullName} <br />
                Household Size: {getHouseholdSize(selectedHousehold)} <br />
                Status:{" "}
                <span
                  className={`${
                    selectedHousehold.status === "pending"
                      ? "text-yellow-600"
                      : "text-green-600"
                  } font-medium`}
                >
                  {selectedHousehold.status}
                </span>
              </Popup>
            </Marker>

            {households
              .filter((h) => h !== selectedHousehold)
              .map((house, i) => (
                <Marker
                  key={i}
                  position={[
                    house.geoCoordinates?.latitude || 0,
                    house.geoCoordinates?.longitude || 0,
                  ]}
                  icon={customIcon}
                >
                  <Popup>
                    <strong>{house?.householdHeadName}</strong> <br />
                    Enumerator: {user?.fullName} <br />
                    Household Size: {getHouseholdSize(house)} <br />
                    Status:{" "}
                    <span
                      className={`${
                        house.status === "pending"
                          ? "text-yellow-600"
                          : "text-green-600"
                      } font-medium`}
                    >
                      {house.status}
                    </span>
                  </Popup>
                </Marker>
              ))}
          </MapContainer>
        </div>
      )}
    </>
  );
};

export default HouseholdMap;
