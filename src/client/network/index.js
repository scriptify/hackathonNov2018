const OPEN_DATA_BEARER = 'ALy-u71hxo2x2myBpvU5bQy0peNHQTH2EBpDo_hMgJp4-8hGERFG_nIjgFCrXu5NDTCsBXIEpZBp-UixH4c_bOtnNTl3blZDoepu4Tc6ODYBqIPDTlUy9V8apP_zr3YiDxHtD06IPeobCklpGLfCEKzB4mE7RkcfZ0gaH0j7HAt2R5aduqlUXNzyLrG6_icUx5J29AwSZwYIfFGPycSlkDmKw45f5NxCw5Pq5I4NwI4Mn_PLrRETfDJhS4KC4OWXFVSXocP65bgmDNCf74yMQQifH17eXDWZwxBUbcBsazjTCaW3cRx_ERxuK4vzJdBwvobsPNIk5TUkWHjAvq5Ek1zydGgZ3dCKFgcVyB-7pQvD0hXxGFPgvXxOUP-wv9ShGT0X79jEB4WdwkfgGHnSy3FNd8-SsdKYZ_JiIzB54yiOe3R0tKH2R3-WzZhd7cQcmt9hGR8w3OPU6sc_iGgOCghjJAk74gx1VF-cvPVyhPXR8HynLlI7-rLHTthHJqVoxyVXTfLBatf-20Z_j_49UU-VaLNJoNtHawl3FDxglCg';
const OPEN_DATA_ENDPOINT = 'http://tourism.opendatahub.bz.it/api';

function get(resourceAndParams) {
  return fetch(`${OPEN_DATA_ENDPOINT}/${resourceAndParams}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPEN_DATA_BEARER}`
    }
  }).then(res => res.json());
}

export async function getPlaces({ latitude, longitude }) {
  const { Items } = await get(`Poi?poitype=4&latitude=${latitude}&longitude=${longitude}`);
  return Items;
}
