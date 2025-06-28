import pandas as pd
import json

# Load the Excel file
file_path = 'C:\\Users\\91917\\Projects\\Sparkle\\sparkle\\src\\QuestionCreate\\Sparkle_questions_2.0.xlsx'  
# Make sure this file is in the same folder as your script
df = pd.read_excel(file_path, sheet_name='Questionnaire 2.0')

# Create the 'deep' flag
df['deep'] = df['Deep Question'].apply(lambda x: True if str(x).strip().lower() == 'x' else False)
# Select and rename columns
final_df = df[['Question', 'Category', 'deep']].rename(columns={'Question': 'question', 'Category': 'category'})
categories = df['Category'].unique()
output_path = 'C:\\Users\\91917\\Projects\\Sparkle\\sparkle\\src\\QuestionCreate\\{}.json'

for cat in categories:
    # Create a new column for each category
    category_df = df.apply(lambda row: row['Question'] if row['Category'] == cat else None, axis=1)
    category_df = df[['Question', 'deep']].rename(columns={'Question': 'question', 'Category': 'category'})

    category_df.to_json(output_path.format(cat), orient='records', indent=4, force_ascii=False)


# Convert to JSON and save
# final_df.to_json(output_path, orient='records', indent=4, force_ascii=False)

print(f'JSON file successfully created: {output_path}')
