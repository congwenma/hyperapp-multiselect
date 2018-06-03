import { h, app } from "hyperapp";
import MultiSelect from "./components/multi_select";

const state = {
  multiSelect: MultiSelect.initialState
};

const actions = {
  multiSelect: MultiSelect.actions
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
  const { multiSelect: multiSelectState } = state;
  const { multiSelect: multiSelectActions } = actions;

  return (
    <div class="counter" style={{ height: "1000px" }}>
      <Description />
      <br />

      <MultiSelect
        state={multiSelectState}
        actions={multiSelectActions}
        objectName={"people"}
        inputClass={"pl0_5"}
        listStyle={{ marginTop: "4px" }}
        isFilterable={true}
        canSelectAll={true}
        // dropdownIcon: DropdownArrowIcon,
        // filterIcon: FilterIcon,
      />
    </div>
  );
};

const myApp = app(state, actions, view, document.body);
window.myApp = myApp;
myApp.multiSelect.updateOptions([
  "Donald Vandervort",
  "Lahoma Propst",
  "Lacy Laswell",
  "Katerine Buckmaster",
  "Herma Olaughlin",
  "Apryl Sigala",
  "Hattie Dill",
  "Magnolia Brar",
  "Kristi Bussell",
  "Roxana Balbuena",
  "Walton Alan",
  "Mamie Locklear",
  "Veda Pujol",
  "Vernita Deangelo",
  "Fredia Biller",
  "Jacqui Bettencourt",
  "Paul Dively",
  "Rosaura Heath",
  "Alva Genao",
  "Lory Casares",
  "Andreas Vanmatre",
  "Mitsue Castaneda",
  "Yukiko Robbins",
  "Jonathon Herford",
  "Edyth Vital",
  "Karyn Leake",
  "Gita Lomanto",
  "Frida Purnell",
  "Elwood Vaillancourt",
  "Yessenia Sambrano"
]);
