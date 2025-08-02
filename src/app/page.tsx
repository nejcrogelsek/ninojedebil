import FormPreview from '../components/FormPreview';

const formData = {
  "title": "Health Assessment Form",
  "pages": [
    {
      "id": "page-1",
      "title": "Weight Input",
      "fields": [
        {
          "id": "weight",
          "type": "number-with-unit",
          "label": "What's your current weight?",
          "unit": "kg",
          "alternateUnit": "lbs",
          "value": "",
          "validation": {
            "required": true,
            "min": 30,
            "max": 300
          }
        }
      ]
    },
    {
      "id": "page-2",
      "title": "Activity Level",
      "fields": [
        {
          "id": "shape-time",
          "type": "radio-emoji",
          "label": "When were you last in the best shape of your life?",
          "options": [
            {
              "value": "less-year",
              "label": "Less than a year ago",
              "emoji": "🤔"
            },
            {
              "value": "1-2-years",
              "label": "1 to 2 years ago",
              "emoji": "😮"
            },
            {
              "value": "3-plus-years",
              "label": "More than 3 years ago",
              "emoji": "😰"
            },
            {
              "value": "never",
              "label": "Never",
              "emoji": "🤷‍♀️"
            }
          ],
          "value": "3-plus-years"
        }
      ]
    },
    {
      "id": "page-3",
      "title": "Activities",
      "fields": [
        {
          "id": "activities",
          "type": "checkbox-emoji",
          "label": "Are any of these activities part of your life?",
          "options": [
            {
              "value": "pet-walking",
              "label": "Walking my pet",
              "emoji": "🐕"
            },
            {
              "value": "active-child",
              "label": "Spending a lot of active time with my child",
              "emoji": "👨‍👩‍👧‍👦"
            },
            {
              "value": "stairs",
              "label": "Climbing stairs frequently",
              "emoji": "🪜"
            },
            {
              "value": "household",
              "label": "Active household tasks",
              "emoji": "🏠"
            },
            {
              "value": "none",
              "label": "No",
              "emoji": "🙄"
            }
          ],
          "value": [
            "active-child",
            "household"
          ]
        }
      ]
    }
  ],
  "theme": {
    "primaryColor": "#6366f1",
    "backgroundColor": "#f8fafc",
    "textColor": "#1e293b"
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <FormPreview formData={formData} />
    </div>
  );
}
