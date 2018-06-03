import { h, app } from "hyperapp";
import MultiSelect from "./components/multi_select";

const state = {
  peopleSelect: MultiSelect.initialState,
  carMakerSelect: MultiSelect.initialState
};

const actions = {
  peopleSelect: MultiSelect.actions,
  carMakerSelect: MultiSelect.actions
};

const Description = () => (
  <div>
    <h1>
      <br />Multi Select
    </h1>
    <p>
      <em>
        in <a href="https://hyperapp.js.org/">Hyperapp</a>
      </em>
    </p>
    <hr />
  </div>
);

const view = (state, actions) => {
  const {
    peopleSelect: peopleSelectState,
    carMakerSelect: carMakerSelectState
  } = state;
  const {
    peopleSelect: peopleSelectActions,
    carMakerSelect: carMakerSelectAction
  } = actions;

  return (
    <div class="counter" style={{ height: "1000px" }}>
      <Description />
      <br />
      <MultiSelect
        state={peopleSelectState}
        actions={peopleSelectActions}
        objectName={"people"}
        isFilterable
        canSelectAll
        // dropdownIcon: DropdownArrowIcon,
        // filterIcon: FilterIcon,
      />
      <br /> <br /> <br />
      <MultiSelect
        state={carMakerSelectState}
        actions={carMakerSelectAction}
        objectName={"car makers"}
        isFilterable
        canSelectAll
        dropdownIcon={
          <i class="material-icons" style={{ marginTop: "-2px" }}>
            keyboard_arrow_down
          </i>
        }
        filterIcon={
          <i
            class="material-icons"
            style={{
              position: "absolute",
              right: "7px",
              fontSize: "18px",
              top: "9px"
            }}
          >
            search
          </i>
        }
      />
    </div>
  );
};

const myApp = app(state, actions, view, document.body);
window.myApp = myApp;
// prettier-ignore
myApp.peopleSelect.updateOptions(["Donald Vandervort", "Lahoma Propst", "Lacy Laswell", "Katerine Buckmaster", "Herma Olaughlin", "Apryl Sigala", "Hattie Dill", "Magnolia Brar", "Kristi Bussell", "Roxana Balbuena", "Walton Alan", "Mamie Locklear", "Veda Pujol", "Vernita Deangelo", "Fredia Biller", "Jacqui Bettencourt", "Paul Dively", "Rosaura Heath", "Alva Genao", "Lory Casares", "Andreas Vanmatre", "Mitsue Castaneda", "Yukiko Robbins", "Jonathon Herford", "Edyth Vital", "Karyn Leake", "Gita Lomanto", "Frida Purnell", "Elwood Vaillancourt", "Yessenia Sambrano"]);

// prettier-ignore
myApp.carMakerSelect.updateOptions(["Abarth", "Aston Martin", "Audi", "Arrinera", "Acura", "Aixam", "AC", "Bentley", "BMW", "Buick", "Bugatti", "Chevrolet", "Cadillac", "Chrysler", "Caterham", "Corvette", "Citroën", "Dacia", "Daihatsu", "Dodge", "Daewoo", "Elfin", "Fiat", "Ferrari", "Ford", "GMC", "Gaz", "Gillet", "Ginetta", "Geely", "Great Wall", "Gumpert", "Honda", "Hennessey", "Hyundai", "Hummer", "Holden", "Isuzu", "Infiniti", "Jeep", "Jaguar", "Joss", "Koenigsegg", "Lamborghini", "Land Rover", "Lancia", "Lincoln", "Lexus", "Luxgen", "Lotus", "Lada", "Maruti Suzuki", "Maserati", "Mahindra", "Mazda", "Maybach", "McLaren", "Mercedes Benz", "Mini", "Morgan Motor", "Mitsubishi", "Mustang", "Mosler", "Nissan", "Noble", "Opel", "Peugeot", "Pagani", "Piaggio", "Panoz", "Porsche", "Perodua", "Pininfarina", "Proton", "Renault", "Rolls Royce", "Rover", "Rimac Automobili", "Ruf Automobile", "REVA", "Scania", "Seat", "Saab", "Scion", "Skoda", "Spyker", "Smart", "Shelby Mustang", "Subaru", "SsangYong", "Suzuki", "Shelby SuperCars", "Tesla", "Tata", "Toyota", "Tatra", "Think", "Troller", "TVR", "Tramontana", "UAZ", "Volkswagen", "Vandenbrink", "Volvo", "Vauxhall", "Vector Motors", "Venturi", "Viper", "Wiesmann", "ZAZ", "Zagato", "ZiL"]);
