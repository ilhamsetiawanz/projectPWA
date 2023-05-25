import{getRestaurantList}from"../../data/fecth-api";import{configData}from"../../configuration/config";export class RESTOCATALOG extends HTMLElement{constructor(){super()}async connectedCallback(){try{const t=await getRestaurantList(),e=configData.urlImgAPI,a=document.createElement("div");a.classList.add("restoItem"),t.forEach((t=>{const n=document.createElement("div");n.classList.add("resto"),n.innerHTML=`\n            <img class="img-resto" src="${e+t.pictureId}" alt="${t.name}">\n            <div class="resto-container">\n              <h2>${t.name}</h2>\n              <p class="resto-info">${t.rating}</p>\n            </div>\n            <a href="#/detail/${t.id}"><button class="detail-btn">Selengkapnya</button></a>\n          `,a.appendChild(n)}));const n=document.createElement("div");n.classList.add("restoList"),n.appendChild(a),this.appendChild(n)}catch(t){console.error(t);const e=document.createElement("p");e.textContent="Failed to load restaurant data",this.appendChild(e)}}}customElements.define("resto-catalog",RESTOCATALOG);