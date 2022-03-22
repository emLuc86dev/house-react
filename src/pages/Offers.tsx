import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import { Spinner } from "../layout/Spinner";
import ListingItem, { ListingType } from "../components/ListingItem";

type listingsType = {
  id: string;
  data: ListingType;
};

const Offers = () => {
  const [listings, setListings] = useState<listingsType[]>([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();


  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Get reference
        const listingsRef = collection(db, "listings");

        // Create a query
        const q = query(
          listingsRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(10)
        );

        // Execute query
        let list: listingsType[] = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          //casting doc.data() from DocumentData to a new object
          const newData = Object.assign(doc.data());

          return list.push({
            id: doc.id,
            data: newData,
          });
        });
        if (list.length <= 0) {
          navigate("/");
          toast.warning(
            `Ups, There's no Offer to show!`
          );
          return;
        }

        const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        // setLastFetchedListing(lastVisible)

        setListings(list);

        setLoading(false);
        toast.success("Successfully fetched");
      } catch (error) {
        toast.error("Could not fetch listings");
      }
    };

    fetchListings();
  }, []);

  return (
    <div className="category">
      <header>
        <p className="pageHeader">
          Offers
        </p>
      </header>

      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="categoryListings">
              {listings.map((listing) => (
                <ListingItem
                  listing={listing.data}
                  id={listing.id}
                  key={listing.id}
                />
              ))}
            </ul>
          </main>

          <br />
          <br />
          {<p className="loadMore">Load More</p>}
          LOCATION: {location.pathname}
        </>
      ) : (
        <p>No listings for {params.categoryName}</p>
      )}
    </div>
  );
};

export default Offers;
