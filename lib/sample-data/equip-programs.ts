export const equipProgramsData = {
  "equip_programs": [
    {
      "equip_id": "equip-burnout-recovery-32",
      "id": "00000000-0000-0000-0000-000000000010",
      "slug": "burnout-recovery-32",
      "title": "Burnout Recovery (32-day)",
      "summary": "A comprehensive 32-day guided program to recover from burnout, build resilience, and restore energy with structured daily lessons and practices.",
      "description": "This evidence-based 32-day program combines cognitive behavioral techniques with mindfulness practices to address the root causes of burnout. You'll develop personalized strategies for managing stress, setting boundaries, and rebuilding your energy reserves through daily guided activities.",
      "price": {
        "currency": "INR",
        "amount_cents": 49900,
        "payment_provider": "razorpay",
        "one_time": true
      },
      "duration_days": 32,
      "expiry_days_after_purchase": 180,
      "onboarding": {
        "required_fields": [
          {"key": "current_burnout_level", "type": "select", "options": ["low","moderate","high"], "required": true},
          {"key": "work_hours_per_week", "type": "number", "required": true},
          {"key": "sleep_hours_avg", "type": "number", "required": true},
          {"key": "stress_triggers", "type": "text", "required": false}
        ]
      },
      "structure": {
        "unlock_rule": "sequential_previous_completed",
        "daily_check_in_time": "20:00",
        "reminder_rules": [
          {"id": "remind_daily", "offset": "20:00", "channels": ["push","email"], "active": true},
          {"id": "midnight_locked_reminder", "offset": "00:00", "channels": ["push"], "active": true, "note": "If previous day incomplete, notify."}
        ]
      },
      "days": [
        {
          "day": 1,
          "title": "Introduction to Burnout",
          "type": "lesson",
          "content": [
            {"kind": "text", "body": "Learn what burnout is, its signs, and how this program will guide recovery."},
            {"kind": "activity", "id": "d1_reflect", "title": "Self-reflection", "instructions": "Write 3 moments recently when you felt most drained."}
          ],
          "required": true,
          "estimated_min": 10
        },
        {
          "day": 2,
          "title": "Sleep Hygiene Basics",
          "type": "practice",
          "content": [
            {"kind": "text", "body": "Sleep is foundational to recovery. Learn basic hygiene rules."},
            {"kind": "challenge", "id": "d2_sleep", "title": "Wind-down routine", "instructions": "Tonight, stop screen use 30 minutes before bed and record your experience."}
          ],
          "required": true,
          "estimated_min": 12
        }
      ],
      "meta": {
        "created_by": "seed_v1",
        "created_at": "2025-09-18T00:00:00Z",
        "version": "1.0",
        "category": "recovery",
        "tags": ["burnout", "recovery", "resilience", "workplace", "stress-management"]
      },
      "tags": ["burnout", "recovery", "mental health", "stress"],
      "created_at": "2025-09-18T00:00:00Z"
    },
    {
      "equip_id": "equip-stress-management-30",
      "id": "00000000-0000-0000-0000-000000000011",
      "slug": "stress-management-30",
      "title": "Stress Management (30-day)",
      "summary": "A 30-day comprehensive program to develop effective stress management techniques and build long-term resilience against daily stressors.",
      "description": "Learn evidence-based stress management strategies including mindfulness, cognitive reframing, and relaxation techniques. This program helps you identify stress triggers and develop personalized coping mechanisms for both acute and chronic stress.",
      "price": {
        "currency": "INR",
        "amount_cents": 39900,
        "payment_provider": "razorpay",
        "one_time": true
      },
      "duration_days": 30,
      "expiry_days_after_purchase": 180,
      "onboarding": {
        "required_fields": [
          {"key": "stress_level", "type": "select", "options": ["low","moderate","high"], "required": true},
          {"key": "main_stress_sources", "type": "multiselect", "options": ["work","relationships","health","finances","other"], "required": true},
          {"key": "current_coping_methods", "type": "text", "required": false}
        ]
      },
      "structure": {
        "unlock_rule": "sequential_previous_completed",
        "daily_check_in_time": "19:00",
        "reminder_rules": [
          {"id": "remind_daily", "offset": "19:00", "channels": ["push","email"], "active": true}
        ]
      },
      "days": [
        {
          "day": 1,
          "title": "Understanding Your Stress",
          "type": "lesson",
          "content": [
            {"kind": "text", "body": "Identify your unique stress patterns and triggers."},
            {"kind": "activity", "id": "d1_stress_mapping", "title": "Stress mapping", "instructions": "Track your stress levels throughout the day."}
          ],
          "required": true,
          "estimated_min": 15
        }
      ],
      "meta": {
        "created_by": "seed_v1",
        "created_at": "2025-09-18T00:00:00Z",
        "version": "1.0",
        "category": "stress",
        "tags": ["stress", "management", "mindfulness", "resilience", "coping"]
      },
      "tags": ["stress", "management", "mental health", "mindfulness"],
      "created_at": "2025-09-18T00:00:00Z"
    },
    {
      "equip_id": "equip-better-sleep-21",
      "id": "00000000-0000-0000-0000-000000000013",
      "slug": "better-sleep-21",
      "title": "Better Sleep (21-day)",
      "summary": "A focused 21-day program to improve sleep quality through evidence-based sleep hygiene practices and cognitive techniques for better rest.",
      "description": "Transform your sleep with this comprehensive program based on cognitive behavioral therapy for insomnia (CBT-I) principles. Learn to optimize your sleep environment, develop healthy sleep routines, and address racing thoughts that interfere with rest.",
      "price": {
        "currency": "INR",
        "amount_cents": 29900,
        "payment_provider": "razorpay",
        "one_time": true
      },
      "duration_days": 21,
      "expiry_days_after_purchase": 120,
      "onboarding": {
        "required_fields": [
          {"key": "sleep_quality", "type": "select", "options": ["poor","fair","good"], "required": true},
          {"key": "average_sleep_hours", "type": "number", "required": true},
          {"key": "sleep_difficulties", "type": "multiselect", "options": ["falling_asleep","staying_asleep","early_waking","restless_sleep"], "required": true}
        ]
      },
      "structure": {
        "unlock_rule": "sequential_previous_completed",
        "daily_check_in_time": "21:00",
        "reminder_rules": [
          {"id": "remind_daily", "offset": "21:00", "channels": ["push"], "active": true}
        ]
      },
      "days": [
        {
          "day": 1,
          "title": "Sleep Science Basics",
          "type": "lesson",
          "content": [
            {"kind": "text", "body": "Learn about sleep cycles, circadian rhythms, and sleep's role in mental health."},
            {"kind": "activity", "id": "d1_sleep_diary", "title": "Sleep diary setup", "instructions": "Begin tracking your sleep patterns and quality."}
          ],
          "required": true,
          "estimated_min": 15
        }
      ],
      "meta": {
        "created_by": "seed_v1",
        "created_at": "2025-09-18T00:00:00Z",
        "version": "1.0",
        "category": "sleep",
        "tags": ["sleep", "insomnia", "rest", "sleep hygiene", "CBT-I"]
      },
      "tags": ["sleep", "insomnia", "rest", "mental health"],
      "created_at": "2025-09-18T00:00:00Z"
    },
    {
      "equip_id": "equip-productivity-challenge-7",
      "id": "00000000-0000-0000-0000-000000000014",
      "slug": "productivity-challenge-7",
      "title": "Productivity Challenge (7-day)",
      "summary": "A quick 7-day intensive challenge to boost productivity, improve focus, and develop sustainable work habits for better performance.",
      "description": "Jumpstart your productivity with this fast-paced 7-day challenge. Learn time management techniques, focus strategies, and energy optimization methods that you can implement immediately for lasting results.",
      "price": {
        "currency": "INR",
        "amount_cents": 19900,
        "payment_provider": "razorpay",
        "one_time": true
      },
      "duration_days": 7,
      "expiry_days_after_purchase": 90,
      "onboarding": {
        "required_fields": [
          {"key": "productivity_level", "type": "select", "options": ["low","moderate","high"], "required": true},
          {"key": "main_productivity_challenges", "type": "multiselect", "options": ["procrastination","distractions","time_management","energy_levels","focus"], "required": true},
          {"key": "work_style", "type": "select", "options": ["remote","office","hybrid"], "required": false}
        ]
      },
      "structure": {
        "unlock_rule": "sequential_previous_completed",
        "daily_check_in_time": "09:00",
        "reminder_rules": [
          {"id": "remind_morning", "offset": "09:00", "channels": ["push","email"], "active": true},
          {"id": "remind_evening", "offset": "18:00", "channels": ["push"], "active": true}
        ]
      },
      "days": [
        {
          "day": 1,
          "title": "Productivity Assessment",
          "type": "lesson",
          "content": [
            {"kind": "text", "body": "Assess your current productivity patterns and identify improvement areas."},
            {"kind": "activity", "id": "d1_time_audit", "title": "Time audit", "instructions": "Track how you spend your time for one full day."}
          ],
          "required": true,
          "estimated_min": 20
        }
      ],
      "meta": {
        "created_by": "seed_v1",
        "created_at": "2025-09-18T00:00:00Z",
        "version": "1.0",
        "category": "productivity",
        "tags": ["productivity", "focus", "time management", "performance", "challenge"]
      },
      "tags": ["productivity", "focus", "performance", "challenge"],
      "created_at": "2025-09-18T00:00:00Z"
    }
  ]
};

export default equipProgramsData;