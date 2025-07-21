"use client";

import { useState, useEffect } from "react";
import { Edit, Save, X } from "lucide-react";

interface CMSContent {
  id: string;
  title: string;
  content: string;
  lastModified: string;
}

interface CMSProps {
  contentId: string;
  defaultTitle: string;
  defaultContent: string;
  className?: string;
}

export default function CMS({
  contentId,
  defaultTitle,
  defaultContent,
  className = "",
}: CMSProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState<CMSContent>({
    id: contentId,
    title: defaultTitle,
    content: defaultContent,
    lastModified: new Date().toISOString(),
  });
  const [editedContent, setEditedContent] = useState(content);

  useEffect(() => {
    // Load content from localStorage (simulating CMS)
    const savedContent = localStorage.getItem(`cms_${contentId}`);
    if (savedContent) {
      const parsed = JSON.parse(savedContent);
      setContent(parsed);
      setEditedContent(parsed);
    }
  }, [contentId]);

  const handleSave = () => {
    const updatedContent = {
      ...editedContent,
      lastModified: new Date().toISOString(),
    };

    // Save to localStorage (simulating CMS)
    localStorage.setItem(`cms_${contentId}`, JSON.stringify(updatedContent));
    setContent(updatedContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedContent(content);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className={`relative ${className}`}>
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Editing Content
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors flex items-center"
              >
                <Save className="h-4 w-4 mr-1" />
                Save
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 transition-colors flex items-center"
              >
                <X className="h-4 w-4 mr-1" />
                Cancel
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                value={editedContent.title}
                onChange={(e) =>
                  setEditedContent({ ...editedContent, title: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Content
              </label>
              <textarea
                value={editedContent.content}
                onChange={(e) =>
                  setEditedContent({
                    ...editedContent,
                    content: e.target.value,
                  })
                }
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative group ${className}`}>
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-600 text-white px-2 py-1 rounded text-xs hover:bg-blue-700 transition-colors flex items-center"
          title="Edit content"
        >
          <Edit className="h-3 w-3 mr-1" />
          Edit
        </button>
      </div>

      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {content.title}
        </h2>
        <div className="text-gray-600 whitespace-pre-wrap">
          {content.content}
        </div>
        {content.lastModified && (
          <p className="text-xs text-gray-400 mt-2">
            Last modified: {new Date(content.lastModified).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  );
}

// Simple CMS Admin Panel Component
export function CMSAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const [contents, setContents] = useState<CMSContent[]>([]);

  useEffect(() => {
    // Load all CMS content from localStorage
    const allContent: CMSContent[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("cms_")) {
        const content = JSON.parse(localStorage.getItem(key) || "{}");
        allContent.push(content);
      }
    }
    setContents(allContent);
  }, [isOpen]);

  const clearAllContent = () => {
    if (
      confirm(
        "Are you sure you want to clear all CMS content? This action cannot be undone."
      )
    ) {
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("cms_")) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach((key) => localStorage.removeItem(key));
      setContents([]);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed display-none bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-700 transition-colors z-50"
      >
        CMS Admin
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">CMS Admin Panel</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Manage your website content</p>
            <button
              onClick={clearAllContent}
              className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
            >
              Clear All Content
            </button>
          </div>

          {contents.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              No content found. Hover over sections on the website to edit them.
            </p>
          ) : (
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">
                Editable Content Sections:
              </h3>
              {contents.map((content) => (
                <div key={content.id} className="bg-gray-50 p-3 rounded">
                  <h4 className="font-medium text-gray-900">{content.title}</h4>
                  <p className="text-sm text-gray-600 truncate">
                    {content.content}
                  </p>
                  <p className="text-xs text-gray-400">
                    Last modified:{" "}
                    {new Date(content.lastModified).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
