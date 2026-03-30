<script lang="ts">
    type Neighbourhood = string;
    type Cinema = string;
    type Preference = string;
  
    let location: Neighbourhood = '';
    let neighbourhoods: Neighbourhood[] = ['Indiranagar', 'Koramangala', 'Whitefield', 'HSR Layout']; // Example list
    let cinemas: Cinema[] = ['PVR Koramangala', 'INOX Whitefield']; // Example list
    let selectedCinemas: Cinema[] = [];
    let movieLanguages: string[] = [];
    let movieStyles: Preference[] = ['Blockbusters', 'Arthouse', 'Highly-Rated', 'Rescreenings', 'Anime'];
    let movieDays: string[] = ['Saturday', 'Sunday'];
    let theaterPreferences: string[] = [];
  
    function updateCinemas(neighbourhood: Neighbourhood): void {
      selectedCinemas = cinemas.filter(cinema => cinema.includes(neighbourhood));
    }
  </script>
  
  <style>
    .pill-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 10px 0;
    }
    .pill {
      background-color: #f3f3f3;
      padding: 5px 15px;
      border-radius: 20px;
      cursor: pointer;
    }
    .pill.selected {
      background-color: #007BFF;
      color: white;
    }
    .multi-dropdown {
      display: flex;
      gap: 10px;
    }
    label {
      display: block;
      margin: 10px 0 5px;
    }
    .section {
      margin-bottom: 20px;
    }
  </style>
  
  <div>
    <h1>Welcome to BLR.Today</h1>
    <p>
      Thank you for installing BLR.Today. The following information will be stored locally on your device and used for filtering events that you care about.
    </p>
  
    <!-- Location Selection -->
    <div class="section">
      <label for="location">Pick your closest neighbourhood:</label>
      <select id="location" bind:value={location} on:change={() => updateCinemas(location)}>
        <option value="" disabled selected>Select a neighbourhood</option>
        {#each neighbourhoods as neighbourhood}
          <option value={neighbourhood}>{neighbourhood}</option>
        {/each}
      </select>
    </div>
  
    <!-- Cinemas -->
    <div class="section">
      <label>Cinema(s) of Choice:</label>
      <div class="pill-bar">
        {#each selectedCinemas as cinema}
          <div
            class="pill {cinemas.includes(cinema) ? 'selected' : ''}"
            on:click={() => {
              if (cinemas.includes(cinema)) {
                cinemas = cinemas.filter(c => c !== cinema);
              } else {
                cinemas = [...cinemas, cinema];
              }
            }}
          >
            {cinema}
          </div>
        {/each}
      </div>
    </div>
  
    <!-- Movie Preferences -->
    <div class="section">
      <label>Any Movie Preferences:</label>
      <div class="multi-dropdown">
        <!-- Languages -->
        <select bind:value={movieLanguages} multiple>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Kannada">Kannada</option>
        </select>
  
        <!-- Styles -->
        <select bind:value={movieStyles} multiple>
          {#each movieStyles as style}
            <option value={style}>{style}</option>
          {/each}
        </select>
  
        <!-- Days -->
        <select bind:value={movieDays} multiple>
          {#each ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as day}
            <option value={day}>{day}</option>
          {/each}
        </select>
      </div>
    </div>
  
    <!-- Theater Plays -->
    <div class="section">
      <label>Do you like theater plays?</label>
      <div class="pill-bar">
        {#each ['For Kids', 'English', 'Hindi', 'Kannada'] as play}
          <div
            class="pill {theaterPreferences.includes(play) ? 'selected' : ''}"
            on:click={() => {
              if (theaterPreferences.includes(play)) {
                theaterPreferences = theaterPreferences.filter(p => p !== play);
              } else {
                theaterPreferences = [...theaterPreferences, play];
              }
            }}
          >
            {play}
          </div>
        {/each}
      </div>
    </div>
  </div>
  