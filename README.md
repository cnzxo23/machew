/* Default (Mobile View) */
div {
    width: 100%;  /* Full width for mobile */
}

/* Tablet View (Min-width: 772px) */
@media (min-width: 772px) {
    div {
        width: 45%;
        display: inline-block; /* Ensures divs appear side by side */
        vertical-align: top; /* Aligns them properly */
    }
    
    img {
        max-height: 30vh; /* Image height limited to 30% of viewport height */
    }
}

/* Large Screen View (Min-width: 998px) */
@media (min-width: 998px) {
    div {
        width: 30%;
    }
}
