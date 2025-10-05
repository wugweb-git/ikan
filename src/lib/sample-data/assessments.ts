export const assessmentsData = {
  "assessments": [
    {
      "assessment_id": "assess-anxiety-gad7",
      "id": "00000000-0000-0000-0000-000000000002",
      "slug": "anxiety",
      "title": "Generalized Anxiety Disorder Scale (GAD-7)",
      "description": "7-item scale widely used to measure severity of anxiety symptoms over the past two weeks.",
      "version": "1.0",
      "metadata": {
        "estimated_minutes": 2,
        "category": "anxiety",
        "allow_repeat_days": 30,
        "created_at": "2025-09-18T00:00:00Z",
        "scoring": {
          "method": "sum",
          "type": "sum",
          "range": [0, 21],
          "interpretation": {
            "0-4": "Minimal - No significant anxiety symptoms.",
            "5-9": "Mild - Monitor symptoms; consider self-care strategies.",
            "10-14": "Moderate - Consider professional support and intervention.",
            "15-21": "Severe - Strongly recommend professional evaluation and treatment."
          }
        }
      },
      "questions": [
        {
          "question_id": "q1",
          "id": "q1",
          "order": 1,
          "text": "Feeling nervous, anxious, or on edge",
          "type": "scale",
          "prompt": "Over the last 2 weeks, how often have you been bothered by feeling nervous, anxious, or on edge?",
          "required": true,
          "options": [
            { "id": "0", "label": "Not at all", "value": 0, "score": 0 },
            { "id": "1", "label": "Several days", "value": 1, "score": 1 },
            { "id": "2", "label": "More than half the days", "value": 2, "score": 2 },
            { "id": "3", "label": "Nearly every day", "value": 3, "score": 3 }
          ]
        },
        {
          "question_id": "q2",
          "id": "q2",
          "order": 2,
          "text": "Not being able to stop or control worrying",
          "type": "scale",
          "prompt": "Over the last 2 weeks, how often have you been bothered by not being able to stop or control worrying?",
          "required": true,
          "options": [
            { "id": "0", "label": "Not at all", "value": 0, "score": 0 },
            { "id": "1", "label": "Several days", "value": 1, "score": 1 },
            { "id": "2", "label": "More than half the days", "value": 2, "score": 2 },
            { "id": "3", "label": "Nearly every day", "value": 3, "score": 3 }
          ]
        },
        {
          "question_id": "q3",
          "id": "q3",
          "order": 3,
          "text": "Worrying too much about different things",
          "type": "scale",
          "prompt": "Over the last 2 weeks, how often have you been bothered by worrying too much about different things?",
          "required": true,
          "options": [
            { "id": "0", "label": "Not at all", "value": 0, "score": 0 },
            { "id": "1", "label": "Several days", "value": 1, "score": 1 },
            { "id": "2", "label": "More than half the days", "value": 2, "score": 2 },
            { "id": "3", "label": "Nearly every day", "value": 3, "score": 3 }
          ]
        }
      ]
    },
    {
      "assessment_id": "assess-depression-phq9",
      "id": "00000000-0000-0000-0000-000000000003",
      "slug": "depression",
      "title": "Patient Health Questionnaire (PHQ-9)",
      "description": "9-item depression screening tool measuring severity of depressive symptoms over the past two weeks.",
      "version": "1.0",
      "metadata": {
        "estimated_minutes": 3,
        "category": "depression",
        "allow_repeat_days": 30,
        "created_at": "2025-09-18T00:00:00Z",
        "scoring": {
          "method": "sum",
          "type": "sum",
          "range": [0, 27],
          "interpretation": {
            "0-4": "Minimal - No depression; encourage healthy lifestyle.",
            "5-9": "Mild - Monitor; suggest self-care and re-screen in 2 weeks.",
            "10-14": "Moderate - Offer self-help + professional support.",
            "15-19": "Moderately severe - Strongly consider active treatment.",
            "20-27": "Severe - Immediate treatment and professional evaluation."
          }
        }
      },
      "questions": [
        {
          "question_id": "q1",
          "id": "q1",
          "order": 1,
          "text": "Little interest or pleasure in doing things",
          "type": "scale",
          "prompt": "Over the last 2 weeks, how often have you been bothered by little interest or pleasure in doing things?",
          "required": true,
          "options": [
            { "id": "0", "label": "Not at all", "value": 0, "score": 0 },
            { "id": "1", "label": "Several days", "value": 1, "score": 1 },
            { "id": "2", "label": "More than half the days", "value": 2, "score": 2 },
            { "id": "3", "label": "Nearly every day", "value": 3, "score": 3 }
          ]
        },
        {
          "question_id": "q2",
          "id": "q2",
          "order": 2,
          "text": "Feeling down, depressed, or hopeless",
          "type": "scale",
          "prompt": "Over the last 2 weeks, how often have you been bothered by feeling down, depressed, or hopeless?",
          "required": true,
          "options": [
            { "id": "0", "label": "Not at all", "value": 0, "score": 0 },
            { "id": "1", "label": "Several days", "value": 1, "score": 1 },
            { "id": "2", "label": "More than half the days", "value": 2, "score": 2 },
            { "id": "3", "label": "Nearly every day", "value": 3, "score": 3 }
          ]
        }
      ]
    },
    {
      "assessment_id": "assess-burnout-risk",
      "id": "00000000-0000-0000-0000-000000000004",
      "slug": "burnout",
      "title": "Burnout Risk Assessment",
      "description": "Comprehensive assessment to identify signs of burnout and emotional exhaustion in work and personal life.",
      "version": "1.0",
      "metadata": {
        "estimated_minutes": 4,
        "category": "burnout",
        "allow_repeat_days": 30,
        "created_at": "2025-09-18T00:00:00Z",
        "scoring": {
          "method": "sum",
          "type": "sum",
          "range": [0, 30],
          "interpretation": {
            "0-10": "Low risk - Healthy work-life balance maintained.",
            "11-20": "Moderate risk - Monitor stress levels and consider preventive measures.",
            "21-30": "High risk - Immediate attention needed; consider professional support."
          }
        }
      },
      "questions": [
        {
          "question_id": "b1",
          "id": "b1",
          "order": 1,
          "text": "I feel emotionally drained by my work",
          "type": "scale",
          "prompt": "How often do you feel emotionally drained by your work?",
          "required": true,
          "options": [
            { "id": "0", "label": "Never", "value": 0, "score": 0 },
            { "id": "1", "label": "Rarely", "value": 1, "score": 1 },
            { "id": "2", "label": "Sometimes", "value": 2, "score": 2 },
            { "id": "3", "label": "Often", "value": 3, "score": 3 },
            { "id": "4", "label": "Always", "value": 4, "score": 4 }
          ]
        }
      ]
    },
    {
      "assessment_id": "assess-sleep-quality",
      "id": "00000000-0000-0000-0000-000000000005",
      "slug": "sleep-quality",
      "title": "Sleep Quality Assessment",
      "description": "Evaluate your sleep patterns, quality, and factors affecting your rest for better sleep health.",
      "version": "1.0",
      "metadata": {
        "estimated_minutes": 3,
        "category": "sleep",
        "allow_repeat_days": 30,
        "created_at": "2025-09-18T00:00:00Z",
        "scoring": {
          "method": "sum",
          "type": "sum",
          "range": [0, 20],
          "interpretation": {
            "0-7": "Good sleep quality - Maintain current sleep habits.",
            "8-14": "Fair sleep quality - Consider improving sleep hygiene.",
            "15-20": "Poor sleep quality - Recommend professional evaluation."
          }
        }
      },
      "questions": [
        {
          "question_id": "s1",
          "id": "s1",
          "order": 1,
          "text": "How often do you have trouble falling asleep?",
          "type": "scale",
          "prompt": "In the past month, how often have you had trouble falling asleep?",
          "required": true,
          "options": [
            { "id": "0", "label": "Never", "value": 0, "score": 0 },
            { "id": "1", "label": "Rarely", "value": 1, "score": 1 },
            { "id": "2", "label": "Sometimes", "value": 2, "score": 2 },
            { "id": "3", "label": "Often", "value": 3, "score": 3 },
            { "id": "4", "label": "Always", "value": 4, "score": 4 }
          ]
        }
      ]
    },
    {
      "assessment_id": "assess-resilience",
      "id": "00000000-0000-0000-0000-000000000006",
      "slug": "resilience",
      "title": "Resilience Assessment",
      "description": "Measure your ability to bounce back from challenges and adapt to difficult situations.",
      "version": "1.0",
      "metadata": {
        "estimated_minutes": 4,
        "category": "resilience",
        "allow_repeat_days": 30,
        "created_at": "2025-09-18T00:00:00Z",
        "scoring": {
          "method": "sum",
          "type": "sum",
          "range": [0, 25],
          "interpretation": {
            "0-10": "Low resilience - Consider building coping strategies.",
            "11-18": "Moderate resilience - Some areas for improvement.",
            "19-25": "High resilience - Strong ability to cope with challenges."
          }
        }
      },
      "questions": [
        {
          "question_id": "r1",
          "id": "r1",
          "order": 1,
          "text": "I am able to adapt when changes occur",
          "type": "scale",
          "prompt": "How well does this statement describe you: I am able to adapt when changes occur?",
          "required": true,
          "options": [
            { "id": "0", "label": "Not at all", "value": 0, "score": 0 },
            { "id": "1", "label": "Rarely", "value": 1, "score": 1 },
            { "id": "2", "label": "Sometimes", "value": 2, "score": 2 },
            { "id": "3", "label": "Often", "value": 3, "score": 3 },
            { "id": "4", "label": "Nearly always", "value": 4, "score": 4 }
          ]
        }
      ]
    },
    {
      "assessment_id": "assess-work-engagement",
      "id": "00000000-0000-0000-0000-000000000007",
      "slug": "work-engagement",
      "title": "Work Engagement Assessment",
      "description": "Assess your level of engagement, motivation, and satisfaction with your work environment.",
      "version": "1.0",
      "metadata": {
        "estimated_minutes": 3,
        "category": "work",
        "allow_repeat_days": 30,
        "created_at": "2025-09-18T00:00:00Z",
        "scoring": {
          "method": "sum",
          "type": "sum",
          "range": [0, 20],
          "interpretation": {
            "0-7": "Low engagement - Consider discussing work satisfaction.",
            "8-14": "Moderate engagement - Room for improvement in work fulfillment.",
            "15-20": "High engagement - Strong connection with work and purpose."
          }
        }
      },
      "questions": [
        {
          "question_id": "w1",
          "id": "w1",
          "order": 1,
          "text": "I find my work meaningful and purposeful",
          "type": "scale",
          "prompt": "How often do you find your work meaningful and purposeful?",
          "required": true,
          "options": [
            { "id": "0", "label": "Never", "value": 0, "score": 0 },
            { "id": "1", "label": "Rarely", "value": 1, "score": 1 },
            { "id": "2", "label": "Sometimes", "value": 2, "score": 2 },
            { "id": "3", "label": "Often", "value": 3, "score": 3 },
            { "id": "4", "label": "Always", "value": 4, "score": 4 }
          ]
        }
      ]
    },
    {
      "assessment_id": "assess-wellbeing-who5",
      "id": "00000000-0000-0000-0000-000000000008",
      "slug": "wellbeing-index",
      "title": "Well-being Index (WHO-5)",
      "description": "World Health Organization Well-Being Index measuring positive mood, vitality, and general interest.",
      "version": "1.0",
      "metadata": {
        "estimated_minutes": 2,
        "category": "wellbeing",
        "allow_repeat_days": 30,
        "created_at": "2025-09-18T00:00:00Z",
        "scoring": {
          "method": "sum",
          "type": "sum",
          "range": [0, 25],
          "interpretation": {
            "0-13": "Poor wellbeing - Consider seeking support.",
            "14-18": "Below average wellbeing - Some areas need attention.",
            "19-25": "Good wellbeing - Maintain current positive practices."
          }
        }
      },
      "questions": [
        {
          "question_id": "who1",
          "id": "who1",
          "order": 1,
          "text": "I have felt cheerful and in good spirits",
          "type": "scale",
          "prompt": "Over the last 2 weeks, how often have you felt cheerful and in good spirits?",
          "required": true,
          "options": [
            { "id": "0", "label": "At no time", "value": 0, "score": 0 },
            { "id": "1", "label": "Some of the time", "value": 1, "score": 1 },
            { "id": "2", "label": "Less than half the time", "value": 2, "score": 2 },
            { "id": "3", "label": "More than half the time", "value": 3, "score": 3 },
            { "id": "4", "label": "Most of the time", "value": 4, "score": 4 },
            { "id": "5", "label": "All of the time", "value": 5, "score": 5 }
          ]
        }
      ]
    },
    {
      "assessment_id": "assess-mindfulness-maas5",
      "id": "00000000-0000-0000-0000-000000000009",
      "slug": "mindfulness",
      "title": "Mindfulness Assessment (MAAS-5)",
      "description": "Mindful Attention Awareness Scale measuring present-moment awareness and mindful behavior.",
      "version": "1.0",
      "metadata": {
        "estimated_minutes": 2,
        "category": "mindfulness",
        "allow_repeat_days": 30,
        "created_at": "2025-09-18T00:00:00Z",
        "scoring": {
          "method": "average",
          "type": "average",
          "range": [1, 6],
          "interpretation": {
            "1-3": "Low mindfulness - Consider mindfulness training.",
            "3.1-4.5": "Moderate mindfulness - Room for development.",
            "4.6-6": "High mindfulness - Strong present-moment awareness."
          }
        }
      },
      "questions": [
        {
          "question_id": "m1",
          "id": "m1",
          "order": 1,
          "text": "I pay attention to sensations, such as the wind in my hair or sun on my face",
          "type": "scale",
          "prompt": "How often do you pay attention to sensations, such as the wind in your hair or sun on your face?",
          "required": true,
          "options": [
            { "id": "1", "label": "Almost always", "value": 1, "score": 1 },
            { "id": "2", "label": "Very frequently", "value": 2, "score": 2 },
            { "id": "3", "label": "Somewhat frequently", "value": 3, "score": 3 },
            { "id": "4", "label": "Somewhat infrequently", "value": 4, "score": 4 },
            { "id": "5", "label": "Very infrequently", "value": 5, "score": 5 },
            { "id": "6", "label": "Almost never", "value": 6, "score": 6 }
          ]
        }
      ]
    }
  ]
};

export default assessmentsData;