<script setup lang="ts">
const route = useRoute()
const dateParam = route.query.date as string || '07.10.2026'

// Parse date (format: "07.10.2026")
const [day, month, year] = dateParam.split('.')
const dateStr = `${year}${month}${day}`
const isoDate = `${year}-${month}-${day}`

const title = encodeURIComponent('Straco House Opening')
const description = encodeURIComponent('You are invited to the opening of Straco House.')
const location = encodeURIComponent('Straco House')

const calendarUrls = {
  google: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dateStr}/${dateStr}&details=${description}&location=${location}`,
  outlook: `https://outlook.live.com/calendar/0/deeplink/compose?subject=${title}&body=${description}&location=${location}&startdt=${isoDate}&enddt=${isoDate}&allday=true`,
  ics: `/assets/straco-house-${dateParam.replace(/\./g, '-')}.ics`
}

const formattedDate = `${day}.${month}.${year}`

useHead({
  title: `Add to Calendar - Straco House ${formattedDate}`,
})
</script>

<template>
  <main class="page">
    <div class="content">
      <p class="subtitle">
        save the date
      </p>

      <h1 class="date">
        {{ formattedDate }}
      </h1>

      <p class="title">
        straco house
      </p>

      <p class="instruction">
        add to your calendar
      </p>

      <div class="buttons">
        <a :href="calendarUrls.google" target="_blank" class="btn">
          Google Calendar
        </a>
        <a :href="calendarUrls.outlook" target="_blank" class="btn">
          Outlook
        </a>
        <a :href="calendarUrls.ics" download class="btn">
          Apple / iCal
        </a>
      </div>
    </div>

    <!-- Footer Logo -->
    <div class="logo-bottom">
      <img
        src="/assets/straco-logo.svg"
        alt="Straco"
        class="logo"
      />
    </div>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  background-color: #000000;
}

.content {
  text-align: center;
  margin-bottom: 50px;
}

.subtitle {
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 4px;
  color: #ffffff;
  margin-bottom: 3px;
  text-transform: uppercase;
}

.date {
  font-size: 38px;
  font-weight: 300;
  letter-spacing: 3px;
  color: #ffffff;
  margin-bottom: 4px;
}

.title {
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 6px;
  color: #ffffff;
  margin-bottom: 80px;
  text-transform: uppercase;
}

.instruction {
  font-size: 9px;
  font-weight: 300;
  letter-spacing: 3px;
  color: #ffffff;
  margin-bottom: 25px;
  text-transform: uppercase;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.btn {
  display: block;
  padding: 12px 30px;
  min-width: 200px;
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 2px;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  border: 1px solid #333333;
  transition: border-color 0.2s ease;
}

.btn:hover {
  border-color: #ffffff;
}

.logo-bottom {
  margin-top: 10px;
}

.logo {
  width: 100px;
  height: auto;
}

@media (max-width: 600px) {
  .date {
    font-size: 28px;
  }

  .btn {
    min-width: 180px;
  }
}
</style>
