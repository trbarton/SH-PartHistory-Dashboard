<script>
    import { db } from "../firebase";
    import {
        collection,
        query,
        orderBy,
        limit,
        getDocs,
        Timestamp,
    } from "firebase/firestore";

    const q = query(collection(db, "parts"), orderBy("_shID"), limit(10));

    let parts = [];

    getDocs(q).then((docs) => {
        docs.forEach((doc) => {
            // console.log(doc);
            parts = [...parts, doc.data()];
        });
    });
</script>

<main>
    <div class="filter-row">
        <i class="material-icons">filter_list</i>

        <div
            class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
        >
            <select class="mdl-textfield__input" id="field" name="Fields">
                <option />
                <option value="_shID">SH ID</option>
                <option value="partName">Part Name</option>
                <option value="brand">Brand</option>
                <option value="createdBy">Created By</option>
            </select>
            <label class="mdl-textfield__label" for="field">Field</label>
        </div>

        <div
            class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
        >
            <select class="mdl-textfield__input" id="operator" name="operator">
                <option />
                <option value="contains">contains</option>
                <option value="equals">equals</option>
                <option value="not equals">not equals</option>
            </select>
            <label class="mdl-textfield__label" for="operator">Operator</label>
        </div>

        <div
            class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
        >
            <input class="mdl-textfield__input" type="text" id="term" />
            <label class="mdl-textfield__label" for="term">Search Term...</label>
        </div>

        <!-- Primary-colored flat button -->
        <button class="mdl-button mdl-js-button mdl-button--primary">
            Apply
        </button>

        <!-- Disabled flat button -->
        <button class="mdl-button mdl-js-button" disabled> Clear </button>
    </div>
    <div>
        <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <tr>
                <th
                    class="mdl-data-table__cell--non-numeric mdl-data-table__header--sorted-descending"
                    >SH ID</th
                >
                <th class="mdl-data-table__cell--non-numeric">Part Name</th>
                <th class="mdl-data-table__cell--non-numeric">Brand</th>
                <th class="mdl-data-table__cell--non-numeric">Created By</th>
                <th>Actions</th>
            </tr>
            {#each parts as part}
                <tr>
                    <td class="mdl-data-table__cell--non-numeric"
                        >{part._shID}</td
                    >
                    <td class="mdl-data-table__cell--non-numeric"
                        >{part.partName}</td
                    >
                    <td class="mdl-data-table__cell--non-numeric"
                        >{part.brand}</td
                    >
                    <td class="mdl-data-table__cell--non-numeric"
                        >{part.createdBy}</td
                    >
                    <td>
                        <!-- Colored icon button -->
                        <button
                            class="mdl-button mdl-js-button mdl-button--icon"
                        >
                            <i class="material-icons">edit</i>
                        </button>
                        <button
                            class="mdl-button mdl-js-button mdl-button--icon"
                        >
                            <i class="material-icons">delete_outline</i>
                        </button>
                    </td>
                </tr>
            {/each}
        </table>
    </div>
</main>

<style>
    main {
        display: grid;
        grid-template-rows: min-content 1fr;
        row-gap: 2vh;
        padding: 20px;
        height: 100vh;
        width: 100vw;
    }

    .filter-row {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 15px;
    }

    table {
        width: 100%;
    }

    th,
    td {
        margin: 10px;
    }
</style>
